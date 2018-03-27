// Maybe this should be main menu container?

/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';

const drawerWidth = 300;

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
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: theme.appBarHeight.default,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: theme.appBarHeight.sm,
    },
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

class AppMenu extends React.Component {
  state = {
    open: this.props.menuActive,
  };

  render() {
    const { classes, contentComponent, handleMenuToggle, menuActive} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Drawer
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
              BackdropProps: {className: classes.modalBackdrop}
            }}
            classes={{
              paper: classNames(classes.drawerPaper, !menuActive && classes.drawerPaperClose),
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
  }
}

AppMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  contentComponent: PropTypes.node,
  menuActive: PropTypes.bool,
  handleMenuToggle: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(AppMenu);