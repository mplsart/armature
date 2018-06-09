// Define Theme properties
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink, red } from './colors';

// Helper function glorked from material-ui code
const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

function pxToRem(value) {
  return `${(value / htmlFontSize) * coef}rem`;
}
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
const accentFontFamily = '"Bryant", "Helvetica", "Arial", sans-serif';

const headingBase = {letterSpacing: 0, color: '#000000'};
const gutterSpacing = 8 * 4; // 8 is theme.spacing.unit

const muiTheme = createMuiTheme({
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

    display4: {fontFamily: accentFontFamily, ...headingBase, fontSize: pxToRem(80), lineHeight: '5.2rem' },
    display3: {fontFamily: accentFontFamily, ...headingBase, fontSize: pxToRem(40), fontWeight: 100, lineHeight: '3.0rem', letterSpacing: 0},
    display2: {fontFamily: accentFontFamily, ...headingBase, fontSize: pxToRem(32), fontWeight: 100 },
    display1: {fontFamily: defaultFontFamily, color: '#000000', fontSize: pxToRem(26), fontWeight: 300 },

    // At the moment these are all the same visually TODO: Figure out where MUI uses them
    headline: {fontFamily: accentFontFamily, ...headingBase, fontSize: '1.375rem', fontWeight: 300 },
    title: {fontFamily: accentFontFamily, ...headingBase, fontSize: '1.375rem', fontWeight: 300 },
    subheading: {fontFamily: accentFontFamily, ...headingBase, fontSize: '1.125rem', fontWeight: 300 },
    body1: {fontFamily: defaultFontFamily, fontWeight: 300, fontSize: '1.125rem'}, // Overline
    body2: {fontFamily: defaultFontFamily, fontWeight: 300, fontSize: pxToRem(14)}, // Default Body Copy
    caption: {fontFamily: defaultFontFamily, color: 'rgba(0, 0, 0, 0.54)', fontSize: pxToRem(12)},
  },
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: blue,
    accent: pink,
    secondary: pink,
    error: red,
  },

  // Non Material UI variables
  globalAppBar: {
    title: {
      color: '#dfdfdf',
      '&:hover': {
        textDecoration: 'none',
        color: '#ffffff'
      },
    },
    subtitle: {
      color:blue[500]
    }
  },
  appBarHeight: {'default': 60, 'sm': 50}, // TODO: Do we need/want different heights?

  // Venue Map Theme
  venues: {
    'gallery': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_GALLERY_fd0595.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_GALLERY_fd0595.png',
      'default_color': 'fd0595',
      'premium_color': 'fd0595',
    },
    'business': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_BUSINESS_607d8b.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_BUSINESS_607d8b.png',
      'default_color': '607d8b',
      'premium_color': '607d8b',
    },
    'institution': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_INSTITUTION_3f51b5.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_INSTITUTION_3f51b5.png',
      'default_color': '3f51b5',
      'premium_color': '3f51b5',
    },
    'popup': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_POPUP_673ab7.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_POPUP_673ab7.png',
      'default_color': '673ab7',
      'premium_color': '673ab7',
    },
    'public': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_PUBLIC_009688.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_PUBLIC_009688.png',
      'default_color': '009688',
      'premium_color': '009688',
    },
    'studios': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_STUDIOS_9c27b0.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_STUDIOS_9c27b0.png',
      'default_color': '9c27b0',
      'premium_color': '9c27b0',
    },

    'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_DEFAULT_9e9e9e.png',
    //'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_GALLERY_fd0595.png',
    'default_color': '9e9e9e'
  }
});

export default muiTheme;