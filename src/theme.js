// Define Theme properties
import { createMuiTheme } from 'material-ui/styles';
import { blue, pink, red } from './colors';

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: '"Bryant", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '1.25rem',
    },
  },
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: blue,
    accent: pink,
    error: {
      main: red[500],
    },
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
});

export default muiTheme;