import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const globalStyles = (theme) => {
  console.log(theme.typography);

  return {
    '@global': {
      'body, html': {
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        ...theme.typography.body1
      },
      'a': {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
        fontWeight:400
      },

      // Headers - note margin is equivalent to gutterBottom=True Typography prop
      'h1': {...theme.typography.display3, margin: '0 -.02em 0.35em 0'},
      'h2': {...theme.typography.display2, margin: '0 -.02em 0.35em 0'},
      'h3': {...theme.typography.display1, margin: '0 0 0.35em 0'},
      'h4': {...theme.typography.headline, margin: '0 0 0.35em 0'},
      'h5': {...theme.typography.subheading, margin: '0 0 0.35em 0'},
      'small': {...theme.typography.caption}
      //'h1, h2, h3, h4': {color:'red', 'fontFamily': theme.fontFamily.accent},
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