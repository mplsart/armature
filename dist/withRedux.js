'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

// https://github.com/iliakan/detect-node
var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var getOrCreateStore = function getOrCreateStore(initStore, initialState) {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
};

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    // First argument is initStore, the rest are redux connect arguments and get passed
    var initStore = args[0],
        connectArgs = args.slice(1);


    var ComponentWithRedux = function ComponentWithRedux() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState;

      // Connect page to redux with connect arguments

      var ConnectedComponent = _reactRedux.connect.apply(null, connectArgs)(Component);

      // Wrap with redux Provider with store
      // Create connected page with initialProps
      return _react2.default.createElement(_reactRedux.Provider, { store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState) }, _react2.default.createElement(ConnectedComponent, initialProps));
    };

    ComponentWithRedux.getInitialProps = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var isServer, store, initialProps;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isServer = checkServer();
              store = getOrCreateStore(initStore);

              // Run page getInitialProps with store and isServer

              if (!Component.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return Component.getInitialProps(_extends({}, props, { isServer: isServer, store: store }));

            case 5:
              _context.t0 = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _context.t0 = {};

            case 9:
              initialProps = _context.t0;
              return _context.abrupt('return', {
                store: store,
                initialState: store.getState(),
                initialProps: initialProps
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return ComponentWithRedux;
  };
};