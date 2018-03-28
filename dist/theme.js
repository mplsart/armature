'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('material-ui/styles');

var _colors = require('./colors');

// Define Theme properties
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

  // Non Material UI variables
  globalAppBar: {
    title: {
      color: '#dfdfdf',
      '&:hover': {
        textDecoration: 'none',
        color: '#ffffff'
      }
    },
    subtitle: {
      color: _colors.blue[500]
    }
  },
  appBarHeight: { 'default': 60, 'sm': 50 } // TODO: Do we need/want different heights?
});

exports.default = muiTheme;