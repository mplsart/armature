import React from 'react';
import { withStyles } from 'material-ui/styles';

const globalStyles = (theme) => {
  return {
    '@global': {
      'body': {
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
      },
      'a': {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  };
};

class GlobalStyles extends React.Component {
  // Double Check if this is in use for server rendering.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() { return null; }
}

export default withStyles(globalStyles)(GlobalStyles);