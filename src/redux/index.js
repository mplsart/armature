// Framework Redux Helpers
//import {call, put} from 'redux-saga/effects';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createAsyncActionTypes(base) {
  // Helper to create Actions for async operations for easy access
  // returns an object with props like {REQUEST: 'REQUEST', SUCCESS: 'SUCCESS', FAILURE: 'FAILURE'}
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export function actionFactory(type, payload = {}) {
  // Helper to construct a redux action
  return {type, ...payload};
}


export function asyncCallMapper(actionGroup) {
  // Helper to map return arguments from async calls to hydrated actions to be handled by pagination, etc
  // actionGroup is a object created by createRequestTypes
  return {
    actionGroup, // for debugging purposes
    request: (async_args) => actionFactory(actionGroup[REQUEST], {...async_args}),
    success: (response, async_args) => actionFactory(actionGroup[SUCCESS], {response, ...async_args}),
    failure: (error, async_args) => actionFactory(actionGroup[FAILURE], {error, ...async_args}),
  };
}

/*
export function* asycFetch(asyncActionMap, apiFunction, ...args) {
  // Generic subroutine to async fetch data

  // Type Check args
  if (!apiFunction || typeof apiFunction !== 'function') {
    throw new Error('api function is undefined or not of type function.');
  }

  // TODO: Type Check asyncActionMap
  yield put( asyncActionMap.request(...args));
  const results = yield call(apiFunction, ...args);
  const {response, error} = results;

  if(response) {
    yield put(asyncActionMap.success(response, ...args) );
  }
  else {
    yield put(asyncActionMap.failure(error, ...args));
  }
}
*/

export function resourceIndex(state={}, action) {
  // A reducer to map resource_ids to resources so we have a single state for them

  // duck type a async action success
  if (action.type &&
      action.type.indexOf('SUCCESS') !== -1 &&
      action.response &&
      action.response.results) {

    // This is likely a async response
    var resources = action.response.results;
    if(!Array.isArray(resources)) {
      resources = [resources];
    }

    let new_resources = {};
    resources.forEach(function (resource) {
      if (resource.resource_id) {
        new_resources[resource.resource_id] = resource;
        return;
      }

      console.debug('Resource did not have resource_id property. Is verbose=true?');
    });

    return Object.assign({}, state, new_resources);
  }

  return state;
}

export function getResourcesFromState(resource_ids, state) {
  return resource_ids.map((resource_id) => state.resourceIndex[resource_id]);
}

export function isPageInState(state, index_name, index_subname, next_cursor, force_refresh=false) {
  // TODO: This works for pagination, but not for individual entities...
  if (force_refresh) {
    return false;
  }

  // TODO: ATM, I don't have another page to switch to
  const next_cursor_index = next_cursor || 'start';
  if (state[index_name] &&
      state[index_name][index_subname] &&
      state[index_name][index_subname].cursors &&
      state[index_name][index_subname].cursors[next_cursor_index]) {
    return true;
  }
  return false;
}