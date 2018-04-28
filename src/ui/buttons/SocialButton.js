import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

const styles = (theme) => ({
  root: {
    'color':'#ffffff',
    'width':'24px',
    'height':'24px',
    'font-size':'18px',
    'margin': theme.spacing.unit,
    'padding': '1px', // This is annoying difference between menu and venue list

    'background-color':theme.palette.primary[500],
    'display':'block',
    'text-align':'center',
    'float':'left',
    '&:hover': {
      'background-color':theme.palette.primary[900],
    }
  },
});

const SocialButton = ({classes, component, service, ...rest}) => {
  let temp = {component: 'a'};
  if (component) {
    temp.component = component;
  }

  let icon = service;
  // TODO: If we you touch this code again, make this a map...
  if (service == 'youtube') {
    icon = 'youtube-play';
  }

  return (
    <temp.component className={classnames(classes.root)} {...rest}>
      <i className={`fa fa-${icon}`}></i>
    </temp.component>
  );
};

SocialButton.propTypes = {
  classes: PropTypes.object,
  service: PropTypes.string,
  component: PropTypes.func
};

export default withStyles(styles)(SocialButton);