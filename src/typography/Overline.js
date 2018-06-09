// Common typography elements
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: { marginTop: '0.35em', fontWeight:100}
});

class Overline extends React.Component {
  render() {
    let {classes, children, ...rest} = this.props;
    return (
      <MUITypography
        component="span"
        variant="caption"
        className={classes.root}
        gutterBottom
        color="inherit"
        {...rest}>{children}</MUITypography>);
  }
}

Overline.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Overline);