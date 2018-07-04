// Common typography elements
import React from 'react';
import PropTypes from 'prop-types';
import MUITypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: { marginTop: '0.35em'},
  iconContainer: {
    paddingRight: theme.gutterSpacing / 2,
    display: 'inline-block'
  }
});

class ContentSubTitle extends React.Component {
  render() {
    let {classes, children, icon, ...rest} = this.props;

    let iconNode;
    if (icon) {
      iconNode = (<div className={classes.iconContainer}>{icon}</div>);
    }

    return (
      <MUITypography
        component="h2"
        variant="display2"
        className={classes.root}
        gutterBottom
        color="inherit"
        {...rest}>
        {iconNode}
        {children}
        </MUITypography>);
  }
}

ContentSubTitle.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default withStyles(styles)(ContentSubTitle);