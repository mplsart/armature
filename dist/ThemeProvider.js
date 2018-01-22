'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThemeProvider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _colors = require('./colors');

var _context = require('./server/context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//See: https://material-ui-next.com/customization/themes/#configuration-variables for additional features

function ThemeProvider(_ref) {
  var children = _ref.children;

  var muiTheme = (0, _styles.createMuiTheme)({
    typography: {
      fontFamily: '"Bryant", "Helvetica", "Arial", sans-serif',
      button: {
        fontWeight: 400,
        textTransform: 'none',
        fontSize: '1.25rem'
      }
    },
    palette: {
      contrastThreshold: 3,
      tonalOffset: 0.2,
      primary: _colors.blue,
      accent: _colors.pink,
      error: {
        main: _colors.red[500]
      }
    },
    appBarHeight: { 'default': 60, 'sm': 50 // TODO: Do we need/want different heights?
    } });

  //https://github.com/mui-org/material-ui/issues/7627
  console.log(process.browser);

  if (process.browser) {
    return _react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: muiTheme },
      children
    );
  } else {
    // Server Rendering in Next.js
    var context = (0, _context.getContext)();
    console.log('DA CONTEXt');
    console.log(_context.getContext);

    return _react2.default.createElement(
      _reactJss.JssProvider,
      { registry: context.sheetsRegistry, jss: context.jss },
      _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: muiTheme, sheetsManager: context.sheetsManager },
        children
      )
    );
  }
}

ThemeProvider.propTypes = {
  children: _propTypes2.default.node
};