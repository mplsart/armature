import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const globalStyles = (theme) => {

  return {
    '@global': {
      'body, html': {
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset',
        ...theme.typography.body1,
        fontSize:'16px' // This is so we don't mess with rem sizing since body1 is in rem
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