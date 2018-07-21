'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Define Theme properties


var _styles = require('@material-ui/core/styles');

var _colors = require('./colors');

// Helper function glorked from material-ui code
var fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
var htmlFontSize = 16;
var coef = fontSize / 14;

function pxToRem(value) {
  return value / htmlFontSize * coef + 'rem';
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
var accentFontFamily = '"Bryant", "Helvetica", "Arial", sans-serif';

var headingBase = { letterSpacing: 0, color: '#000000' };
var gutterSpacing = 8 * 4; // 8 is theme.spacing.unit

var muiTheme = (0, _styles.createMuiTheme)({
  gutterSpacing: gutterSpacing, // 32px
  fontFamily: { default: defaultFontFamily, accent: accentFontFamily },
  typography: {
    fontFamily: defaultFontFamily,

    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '1.25rem',
      fontFamily: accentFontFamily,
      letterSpacing: '1px'
    },

    display4: _extends({ fontFamily: accentFontFamily }, headingBase, { fontSize: pxToRem(80), lineHeight: '5.2rem' }),
    display3: _extends({ fontFamily: accentFontFamily }, headingBase, { fontSize: pxToRem(40), fontWeight: 100, lineHeight: '3.0rem', letterSpacing: 0 }),
    display2: _extends({ fontFamily: accentFontFamily }, headingBase, { fontSize: pxToRem(32), fontWeight: 100 }),
    display1: { fontFamily: defaultFontFamily, color: '#000000', fontSize: pxToRem(26), fontWeight: 300 },

    // At the moment these are all the same visually TODO: Figure out where MUI uses them
    headline: _extends({ fontFamily: accentFontFamily }, headingBase, { fontSize: '1.375rem', fontWeight: 300 }),
    title: _extends({ fontFamily: accentFontFamily }, headingBase, { fontSize: '1.375rem', fontWeight: 300 }),
    subheading: _extends({ fontFamily: accentFontFamily }, headingBase, { fontSize: '1.125rem', fontWeight: 300 }),
    body1: { fontFamily: defaultFontFamily, fontWeight: 300, fontSize: '1.125rem' }, // Overline
    body2: { fontFamily: defaultFontFamily, fontWeight: 300, fontSize: pxToRem(14) }, // Default Body Copy
    caption: { fontFamily: defaultFontFamily, color: 'rgba(0, 0, 0, 0.54)', fontSize: pxToRem(12) }
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