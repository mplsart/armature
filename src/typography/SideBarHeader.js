// Common typography elements
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin:`${theme.spacing.unit * 3}px 0 ${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  }
});

class SideBarHeader extends React.Component {
  render() {
    let {classes, children, ...rest} = this.props;
    return (
      <MUITypography
        component="h2"
        variant="display2"
        className={classes.root}
        {...rest}>{children}</MUITypography>);
  }
}

SideBarHeader.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(SideBarHeader);