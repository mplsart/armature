'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ThemeProvider.js';
exports.default = ThemeProvider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _context = require('./server/context');

var _CssBaseline = require('material-ui/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _GlobalStyles = require('./GlobalStyles');

var _GlobalStyles2 = _interopRequireDefault(_GlobalStyles);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//See: https://material-ui-next.com/customization/themes/#configuration-variables for additional features

// Note: This is currently only in use by Admin Client
function ThemeProvider(_ref) {
  var children = _ref.children;


  //https://github.com/mui-org/material-ui/issues/7627
  if (process.browser) {
    return _react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: _theme2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      _react2.default.createElement(_CssBaseline2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }),
      _react2.default.createElement(_GlobalStyles2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      children
    );
  } else {
    console.log('This is still experimental, especially for next.js');

    // Server Rendering in Next.js
    var context = (0, _context.getContext)();
    return _react2.default.createElement(
      _reactJss.JssProvider,
      { registry: context.sheetsRegistry, jss: context.jss, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: _theme2.default, sheetsManager: context.sheetsManager, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement(_CssBaseline2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }),
        _react2.default.createElement(_GlobalStyles2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        children
      )
    );
  }
}

ThemeProvider.propTypes = {
  children: _propTypes2.default.node
};