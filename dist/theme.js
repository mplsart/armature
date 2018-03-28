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
    secondary: _colors.pink,
    error: _colors.red
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
  appBarHeight: { 'default': 60, 'sm': 50 }, // TODO: Do we need/want different heights?

  // Venue Map Theme
  venues: {
    'gallery': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_GALLERY_fd0595.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_GALLERY_fd0595.png',
      'default_color': 'fd0595',
      'premium_color': 'fd0595'
    },
    'business': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_BUSINESS_607d8b.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_BUSINESS_607d8b.png',
      'default_color': '607d8b',
      'premium_color': '607d8b'
    },
    'institution': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_INSTITUTION_3f51b5.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_INSTITUTION_3f51b5.png',
      'default_color': '3f51b5',
      'premium_color': '3f51b5'
    },
    'popup': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_POPUP_673ab7.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_POPUP_673ab7.png',
      'default_color': '673ab7',
      'premium_color': '673ab7'
    },
    'public': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_PUBLIC_009688.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_PUBLIC_009688.png',
      'default_color': '009688',
      'premium_color': '009688'
    },
    'studios': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_STUDIOS_9c27b0.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_STUDIOS_9c27b0.png',
      'default_color': '9c27b0',
      'premium_color': '9c27b0'
    },

    'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_DEFAULT_9e9e9e.png',
    //'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_GALLERY_fd0595.png',
    'default_color': '9e9e9e'
  }
});

exports.default = muiTheme;