import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = theme => ({
  menuButtonJazzy: {
    transition: 'background-color 0.3s',
    marginLeft: -2 * theme.spacing.unit,
    marginRight: -2 * theme.spacing.unit,
    padding: 15,
    borderRadius:0,
    height: theme.appBarHeight.sm,

    [theme.breakpoints.up('sm')]: {
      marginLeft: -3 * theme.spacing.unit,
      marginRight: 2 * theme.spacing.unit,
      height: theme.appBarHeight.default,
      width:60,
    },
    //'&:hover, &.active' : {
    '&:hover' : {
      backgroundColor: '#333',
    },
  },
  menuButtonJazzyLink: {
    '&:hover' : {
      textDecoration: 'none',
    }
  },
  menuButtonJazzyPatty: { //Span
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    borderRadius: 1,
    height: 3,
    width: 25,
    backgroundColor: 'white',
    content: '"."',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'all 500ms ease-in-out',
    '&.patty1': { top: 12 },
    '&.patty3': { top: -12 },
    '&.patty2.active' : { backgroundColor: 'transparent' },
    '&.patty1.active, &.patty3.active': { backgroundColor: theme.palette.primary[500] },
    '&.patty1.active': { top:4, transform: 'rotate(45deg)' },
    '&.patty3.active': { top:-2, transform: 'rotate(-45deg)' },
  }
});

function HamburgerMenu({ classes, active, handleMenuToggle }) {
  return (
    <IconButton onClick={ handleMenuToggle } className={classNames(classes.menuButtonJazzy, active && 'active')} color="default" aria-label="Menu">
      <a className={classes.menuButtonJazzyLink} id="side_nav_toggle" title="Show Menu">
        <span className={classNames(classes.menuButtonJazzyPatty, 'patty1', active && 'active')}>&nbsp;</span>
        <span className={classNames(classes.menuButtonJazzyPatty, 'patty2', active && 'active')}>&nbsp;</span>
        <span className={classNames(classes.menuButtonJazzyPatty, 'patty3', active && 'active')}>&nbsp;</span>
      </a>
    </IconButton>
  );
}
HamburgerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  active: PropTypes.bool,
  handleMenuToggle: PropTypes.func.isRequired
};


export default withStyles(styles, { withTheme: true })(HamburgerMenu);