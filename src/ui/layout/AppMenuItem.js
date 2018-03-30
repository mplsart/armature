// A Wrapper class for menu items
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, /* ListItemIcon, ListItemText */ } from 'material-ui/List';
import classNames from 'classnames';


const styles = theme => ({
  listItem: {
    color: theme.palette.primary[500],
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
    fontSize: 18,
    padding: theme.spacing.unit,
    '&:hover': {
      color: theme.palette.primary[900]
    }
  },
});

const AppMenuItem = ({classes, children, ...rest}) => {
  return (<ListItem className={classes.listItem} {...rest}>{children}</ListItem>);
};

AppMenuItem.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
};

export default withStyles(styles)(AppMenuItem);

