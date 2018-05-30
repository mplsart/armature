// Simple Sidebar Wrapper Element
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px 0`,
    borderTop:'1px solid black'
  }
});

class SideBarContainer extends React.Component {
  render() {
    let {classes, children, ...rest} = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}

SideBarContainer.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(SideBarContainer);