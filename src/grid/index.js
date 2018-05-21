import React from 'react';
import PropTypes from 'prop-types';
import MuiGrid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = (theme) => {
  return {
    fluidContainer: {
      width:'100%',
      flexGrow: 1,
    },
    legacyContainer: {
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%', // xs,sm
      flexGrow: 1,
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,

      [theme.breakpoints.only('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.only('sm')]: {
        width: '100%'
      },
      [theme.breakpoints.only('md')]: {
        width: theme.breakpoints.width('md')
      },
      [theme.breakpoints.only('lg')]: {
        width: theme.breakpoints.width('lg')
      },
      [theme.breakpoints.only('xl')]: { // force width of lg
        width: theme.breakpoints.width('lg')
      },
    },
    alignRight: { marginRight: 0 },
    alignLeft: { marginLeft: 0 },
    typeContainer: {},
    typeItem : {}
  }
}

function _Grid({classes, align, theme, className, children, fluid, ...rest}) {
  let classNamesX = [className];

  if (fluid) {
    classNamesX.push(classes.fluidContainer);
  }
  else {
    classNamesX.push(classes.legacyContainer);

    if (align) {
      if (align == 'right') {
        classNamesX.push(classes.alignRight);
      }
      else if (align == 'left') {
        classNamesX.push(classes.alignLeft);
      }
    }
  }
  return (<div className={classNames(classNamesX)} {...rest}>{ children }</div>)
}
// prop definitions
_Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  fluid: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right'])
};


function _Row({classes, theme, className, children, ...rest}) {
  return (<MuiGrid spacing={Number(theme.spacing.unit * 2)} container={true} className={classNames(classes.typeContainer, className)} {...rest}>{ children }</MuiGrid>);
}
// prop definitions
_Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object
};


function _Col(props) {
  let {classes, className, children, theme, ...rest} = props;
  return (<MuiGrid item={true} {...rest} className={classNames(classes.typeItem, className)}>{ children }</MuiGrid>);
}

_Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object
};

const Row = withStyles(styles, { withTheme: true })(_Row);
const Col = withStyles(styles, { withTheme: true })(_Col);
const Grid = withStyles(styles, { withTheme: true })(_Grid);

export {Grid, Row, Col};