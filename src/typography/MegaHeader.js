// Common typography elements
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      // Phones in portrait
      fontSize:'2.5rem',
      lineHeight:'2.6rem'
    },
    [theme.breakpoints.only('sm')]: {
      // Ipad in portrait and phones in landscape
      fontSize:'3.5rem',
      lineHeight:'3.6rem'
    },
  }
});

class MegaHeader extends React.Component {
  render() {
    let {classes, children, ...rest} = this.props;
    return (
      <MUITypography
        component="h1"
        variant="display4"
        className={classes.root}
        gutterBottom
        color="inherit"
        {...rest}>{children}</MUITypography>);
  }
}

MegaHeader.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(MegaHeader);