import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FrameworkAppBar from '../../../src/ui/layout/AppBar';
import CoolLink from './CoolLink';

const styles = theme => {
  return {
    title: theme.globalAppBar.title,
    subtitle: theme.globalAppBar.subtitle
  };
};

function titleClickHandler(e) {
  // Title Click Handler
  // - record analytic, tell menu to close, etc
  console.log('titleClickHandler!!!!');
  console.log(e);
}

const AppBar = ({classes, ...rest}) =>  {
  let fluid = false; // TODO: Pass this in via PageWrapper level props?
  return (
    <FrameworkAppBar
      {...rest}
      fluid={fluid}
      titleComponents={
        (<CoolLink
          href="/"
          className={classes.title}
          onClick={titleClickHandler}>MPLSART<span className={classes.subtitle}></span>.COM</CoolLink>)}
    />
  );
};

AppBar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AppBar);
