import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

// Style Overrides for the button
const styles2 = theme => ({
  button: {
    //margin:  theme.spacing.unit,
    //marginLeft: 0,
    //padding:'0 2.5rem',
    //fontWeight:'normal',
    //minHeight:'26px',
    fontSize: '1rem',
  },
  input: {
    //display: 'none',
  },
});

function ListItemAction(props) {
  const { classes, children, linkClass, linkClassProps, ...rest } = props;
  return (<Button variant="raised" color="primary" className={classes.button} {...rest} component={linkClass} {...linkClassProps}>{ children }</Button>);
}

ListItemAction.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

let ListItemActionButton = withStyles(styles2)(ListItemAction);

const styles = (theme) => ({
  root: {
    border: '1px solid black',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding:'32px',
    width:'100%',
    height: '100%',

    '&:before': {
      content: '"" ""',
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '100%',
    }
  },

  contentContainer: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },

  icon: {
    fontSize: '65px',
    lineHeight: '65px',
    [theme.breakpoints.only('md')]: {
    fontSize: '45px',
    lineHeight: '45px',
    }
  },
  text: {
    fontSize: '30px',
    lineHeight: '40px',
    [theme.breakpoints.only('md')]: {
      fontSize: '20px',
      lineHeight: '25px'
    }
  }
});


function PromoCardGalleryGuide({classes, linkClass, linkClassProps}) {
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <p><i className={classnames('fa', 'fa-map-marker', classes.icon)}></i></p>

        <p className={classes.text}>Find all <br />the local art</p>
        <ListItemActionButton linkClass={linkClass} linkClassProps={linkClassProps}>Gallery Guide</ListItemActionButton>
      </div>
    </div>
  );
}

PromoCardGalleryGuide.propTypes = {
  classes: PropTypes.object,
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.func,
};

export default withStyles(styles)(PromoCardGalleryGuide);