// Common typography elements
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {fontSize:'1.2rem'}
});

class Lead extends React.Component {
  render() {
    let {classes, children, ...rest} = this.props;

    return (
      <MUITypography
        component="p"
        variant="body1"
        className={classes.root}
        gutterBottom
        color="inherit"
        {...rest}>{children}</MUITypography>);
  }
}

Lead.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Lead);