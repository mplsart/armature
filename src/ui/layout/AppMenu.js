// Maybe this should be main menu container?

/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';

// TODO: Run this off of the theme
const drawerWidth = 300;

// TODO: Eval what of these is even being used...
const styles = theme => ({
  drawerPaper: {
    backgroundColor:'#000',
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    flex:'none'
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    padding: theme.spacing.unit * 2,
    paddingTop: 0,
  },
  modal: {
    top:theme.appBarHeight.sm,
    [theme.breakpoints.up('sm')]: {
      top:theme.appBarHeight.default,
    }
  },
  modalBackdrop: {
    top:theme.appBarHeight.sm,
    [theme.breakpoints.up('sm')]: {
      top:theme.appBarHeight.default,
    }
  }
});

const AppMenu = ({ classes, contentComponent, handleMenuToggle, menuActive}) => {
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: {className: classes.modalBackdrop}
          }}
          classes={{
            paper: classNames(classes.drawerPaper),
            modal: classNames(classes.modal)
          }}
          open={ menuActive }
          onClose={handleMenuToggle}
        >
          <div className={classes.drawerInner}>
            { contentComponent }
          </div>
        </Drawer>
      </div>
    </div>
  );
};

AppMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  contentComponent: PropTypes.node,
  menuActive: PropTypes.bool,
  handleMenuToggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(AppMenu);