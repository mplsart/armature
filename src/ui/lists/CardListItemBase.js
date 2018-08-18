import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Overline from '../../typography/Overline';

const styles = (theme) => ({
  root: { width: '100%', padding: '12px !important', overflowX: 'hidden'},
  image: {
    width: '5rem',
    height: '5rem',
    marginRight: '0px',
  },

  text: {
    '& h3': {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(18),
      marginBottom:'4px',
    },
    '&.highlightPrimary h3': {
      color: theme.palette.primary['500'],
    },
    '& aside': {
      lineHeight: theme.typography.pxToRem(18)
    }
  },
});

function CardListItemBase(props) {
  let {classes, button, imageFloat, divider, highlightPrimary, imageUrl, imageAltText, primaryText, secondaryText, overlineText, underlineText, linkClassProps, linkClass, ...rest} = props;
  let imageNode;
  let underlineNode, overlineNode;

  // Image
  if (imageUrl) {
    imageNode = (
      <ListItemIcon>
        <CardMedia
          className={classnames(classes.image)}
          image={ imageUrl }
          title={ imageAltText }
        />
      </ListItemIcon>
    );
  }

  // Textual Content
  if (overlineText) {
    overlineNode = <Overline>{overlineText}</Overline>;
  }

  if (underlineText) {
    underlineNode = <Overline>{underlineText}</Overline>;
  }

  primaryText = (<span>{overlineNode}<Typography variant="subheading">{primaryText}</Typography>{underlineNode}</span>);
  secondaryText = (<span><Typography variant="body2">{secondaryText}</Typography></span>);

  // Primary Link (you can also pass onClick)
  if (linkClass) {
    let derp = {linkClass};
    rest.component = (props) => (<derp.linkClass {...linkClassProps} {...props} />);
  }

  return (
    <ListItem
      button={button}
      className={classes.root}
      divider={divider}
      {...rest}
    >
      { imageFloat == 'right' && imageNode }

      <ListItemText
        classes={{root:classnames(classes.text, highlightPrimary ? 'highlightPrimary' : '')}}
        primary={ primaryText }
        secondary={ secondaryText }
        disableTypography
      />

      { imageFloat == 'left' && imageNode }

    </ListItem>
  );
}

CardListItemBase.propTypes = {
  classes: PropTypes.object,
  button: PropTypes.bool,
  imageFloat: PropTypes.string,
  divider: PropTypes.bool,
  highlightPrimary: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  overlineText: PropTypes.string,
  underlineText: PropTypes.string,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardListItemBase.defaultProps = {imageFloat: 'left'};

export default withStyles(styles)(CardListItemBase);