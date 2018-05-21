'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setContext = setContext;
exports.getContext = getContext;

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _reactJss = require('react-jss');

var _createGenerateClassName = require('@material-ui/core/styles/createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure JSS
var jss = (0, _jss.create)((0, _jssPresetDefault2.default)());
jss.options.createGenerateClassName = _createGenerateClassName2.default;

function createContext() {
  return {
    jss: jss,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new WeakMap(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _reactJss.SheetsRegistry()
  };
}

function setContext() {
  // Singleton hack as there is no way to pass variables from _document.js to pages yet.
  global.__INIT_MATERIAL_UI__ = createContext();
}

function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return global.__INIT_MATERIAL_UI__;
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}