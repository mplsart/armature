'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageContext;

var _jss = require('jss');

var _styles = require('@material-ui/core/styles');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var poo = 1; // Material-UI context for use with JssProvider for SSR
// Note: if you use `npm link <localpath>` => className missmatch thing. Use `npm install <localpath>`

/* eslint-disable no-underscore-dangle */

function createPageContext() {
  return {
    theme: _theme2.default,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry(),
    // The standard class name generator.
    generateClassName: (0, _styles.createGenerateClassName)()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).

  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side. Next.js leverages this
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}