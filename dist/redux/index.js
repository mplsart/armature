'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createAsyncActionTypes = createAsyncActionTypes;
exports.actionFactory = actionFactory;
exports.asyncCallMapper = asyncCallMapper;
exports.resourceIndex = resourceIndex;
exports.getResourcesFromState = getResourcesFromState;
exports.isPageInState = isPageInState;
// Framework Redux Helpers
//import {call, put} from 'redux-saga/effects';

var REQUEST = 'REQUEST';
var SUCCESS = 'SUCCESS';
var FAILURE = 'FAILURE';

function createAsyncActionTypes(base) {
  // Helper to create Actions for async operations for easy access
  // returns an object with props like {REQUEST: 'REQUEST', SUCCESS: 'SUCCESS', FAILURE: 'FAILURE'}
  return [REQUEST, SUCCESS, FAILURE].reduce(function (acc, type) {
    acc[type] = base + '_' + type;
    return acc;
  }, {});
}

function actionFactory(type) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Helper to construct a redux action
  return _extends({ type: type }, payload);
}

function asyncCallMapper(actionGroup) {
  // Helper to map return arguments from async calls to hydrated actions to be handled by pagination, etc
  // actionGroup is a object created by createRequestTypes
  return {
    actionGroup: actionGroup, // for debugging purposes
    request: function request(async_args) {
      return actionFactory(actionGroup[REQUEST], _extends({}, async_args));
    },
    success: function success(response, async_args) {
      return actionFactory(actionGroup[SUCCESS], _extends({ response: response }, async_args));
    },
    failure: function failure(error, async_args) {
      return actionFactory(actionGroup[FAILURE], _extends({ error: error }, async_args));
    }
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

function resourceIndex() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  // A reducer to map resource_ids to resources so we have a single state for them

  // duck type a async action success
  if (action.type && action.type.indexOf('SUCCESS') !== -1 && action.response && action.response.results) {

    // This is likely a async response
    var resources = action.response.results;
    if (!Array.isArray(resources)) {
      resources = [resources];
    }

    var new_resources = {};
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

function getResourcesFromState(resource_ids, state) {
  return resource_ids.map(function (resource_id) {
    return state.resourceIndex[resource_id];
  });
}

function isPageInState(state, index_name, index_subname, next_cursor) {
  var force_refresh = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // TODO: This works for pagination, but not for individual entities...
  if (force_refresh) {
    return false;
  }

  // TODO: ATM, I don't have another page to switch to
  var next_cursor_index = next_cursor || 'start';
  if (state[index_name] && state[index_name][index_subname] && state[index_name][index_subname].cursors && state[index_name][index_subname].cursors[next_cursor_index]) {
    return true;
  }
  return false;
}