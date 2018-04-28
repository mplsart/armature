import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

// Style Overrides for the button
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontSize:'1.8rem',
    height:'4.5rem',
    lineHeight: '4.5rem',
    padding:'0 2.5rem',
    fontWeight:'bold'
  },
  input: {
    display: 'none',
  },
});

function GiantActionButton(props) {
  const { classes, children, ...rest } = props;
  return (<Button variant="raised" color="primary" className={classes.button} {...rest}>{ children }</Button>);
}

GiantActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withStyles(styles)(GiantActionButton);