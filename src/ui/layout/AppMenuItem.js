// A Wrapper class for menu items
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  listItem: {
    ...theme.typography.subheading,
    color: theme.palette.primary[500],
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
    fontSize: 18,
    padding: theme.spacing.unit,
    '&:hover': {
      color: theme.palette.primary[900],
      textDecoration: 'none'
    }
  },
});

const AppMenuItem = ({classes, children, ...rest}) => {
  return (<ListItem button className={classes.listItem} {...rest}>{children}</ListItem>);
};

AppMenuItem.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
};

export default withStyles(styles)(AppMenuItem);

