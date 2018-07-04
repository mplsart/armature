import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    textAlign: 'center',
    verticalAlign: 'middle',
    padding:'32px',
    width:'100%',
    height: '100%',
    backgroundColor: theme.palette.secondary[500],
    color: '#ffffff',
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
  }
});


function PromoCardInstagram({classes, resource, linkClassProps, ...props}) {
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <p><i className="fa fa-instagram" style={{fontSize: '120px'}}></i></p>
        <p style={{fontSize: '30px', lineHeight: '40px'}}>Follow along.</p>
      </div>
    </div>
  );
}

PromoCardInstagram.propTypes = {
  classes: PropTypes.object,
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default withStyles(styles)(PromoCardInstagram);