/* Default Styles For Thin Wide Call To Action Button */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

// Style Overrides for the button
const styles = theme => ({
  button: {
    margin:  theme.spacing.unit,
    marginLeft: 0,
    padding:'0 2.5rem',
    fontWeight:'normal',
    minHeight:'26px',
    fontSize: '.75rem',
  },
  input: {
    display: 'none',
  },
});

function ListItemAction(props) {
  const { classes, children, ...rest } = props;
  return (<Button variant="raised" color="primary" className={classes.button} {...rest}>{ children }</Button>);
}

ListItemAction.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withStyles(styles)(ListItemAction);