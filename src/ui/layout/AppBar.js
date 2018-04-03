import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MUIAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AppBarMenuIcon from './AppBarMenuIcon';
import {Grid, Row, Col} from 'armature/dist/grid';

const styles = theme => ({
  fixedRoot: { // Placeholder that pushesdown the content
    width: '100%',
    paddingTop: theme.appBarHeight.sm,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.appBarHeight.default,
    }
  },

  appBar: {
    backgroundColor: '#222', // TODO: Make theme variable?
    height: theme.appBarHeight.sm, // TODO: Make theme variable? appBarHeight
    minHeight: theme.appBarHeight.sm,
    [theme.breakpoints.up('sm')]: {
      height: theme.appBarHeight.default,
      minHeight: theme.appBarHeight.default,
    }
  },

  gridContainer: {
    // When the grid isn't fluid, but is small enough, hide the gutter padding
    [theme.breakpoints.down('md')]: {
      paddingLeft:0, // Alternately, we could be fluid at medium
    }
  },
  toolBar: {
    minHeight: theme.appBarHeight.sm,
    [theme.breakpoints.up('sm')]: {
      minHeight: theme.appBarHeight.default,
    }
  },

  title: {
    flex: 1,
    fontSize: '1.75rem',
    lineHeight: '1.75rem',
    fontWeight: 100,
    textAlign:'left',
    color: '#dfdfdf',
    marginTop: '2px', // I wish we could get rid of this...?
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
    }
  },
  loader: {
    height: '2px',
    //display:'none'
  }
});

class AppBar extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    menuActive: this.props.menuActive
  };

  handleClick = (e) => {
    this.props.handleMenuToggle(e);
  };

  // This may not be used?
  handleRequestClose = () => {
    this.props.handleMenuToggle();
  };

  render() {
    let { classes, fluid, menuActive, titleComponents, rightComponents } = this.props;

    return (
      <div className={ classes.fixedRoot }>
        <MUIAppBar position="fixed" className={classes.appBar}>
          <Grid fluid={fluid} className={classes.gridContainer}>
            <Toolbar className={classes.toolBar}>

              <AppBarMenuIcon active={menuActive} handleMenuToggle={ this.handleClick.bind(this) }/>
              <Typography type="title" color="inherit" className={classes.title}>
                  { titleComponents }
              </Typography>
              { rightComponents }
            </Toolbar>
            </Grid>
        </MUIAppBar>
      </div>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  menuActive: PropTypes.bool,
  handleMenuToggle: PropTypes.func,
  rightComponents: PropTypes.node,
  titleComponents: PropTypes.node,
  fluid: PropTypes.bool
};

export default withStyles(styles)(AppBar);