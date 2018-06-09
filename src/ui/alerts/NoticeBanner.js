import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor : '#FFF59D',
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

function NoticeBanner({ children, classes}) {
  return (
  <div className={ classes.root }>{children}</div>
  );
}

NoticeBanner.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};


export default withStyles(styles)(NoticeBanner);