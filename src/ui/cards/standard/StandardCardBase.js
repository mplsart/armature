import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Overline from '../../../typography/Overline';

let styles = (theme) => {
  return {
    root: {
      position: 'relative',
      '&:hover': {
        '& a': {
          textDecoration: 'none',
        },
        '& .image': {
          transform:'scale(1.1)'
        },

        '& .primaryTitle': {
          color: theme.palette.primary[500]
        }
      }
    },

    imageWrapper: {
      overflow:'hidden',
    },
    image: {
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      height:0,
      display:'block',
      padding:'52.42% 0 0 0', // 60 v 52.42
      position:'relative',
      overflow: 'hidden',
      '&.withShadow': {},
      backgroundColor: '#eeeeee',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      [theme.breakpoints.only('xs')]: {
        //padding:'30% 0 0 0',
      }
    },

    imageLink: {
      display: 'block',
      height:'100%',
      width:'100%',
      position: 'absolute',
      top:0,
      left:0,
    },

    contentContainer: {
      width:'100%',
      [theme.breakpoints.only('xs')]: { },
    },
    contentContainerContent: {
      bottom:0,
      padding: '0px',
      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        padding: 8,
      },
    },

    primaryTitle: {
      ...theme.typography.display2,
      fontFamily: theme.fontFamily.accent,
      marginTop: '0.35em',
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(23), //1.46429em
      fontWeight: 400,
      marginBottom:0,
    },

    byline: {
      display:'inline-block',
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      backgroundColor:'#fafafa',
      padding: '8px 16px 8px 8px',

      fontSize: '14px',
      padding: '0px 8px 0px 0px',
    },

    byLineIcon: {
      marginRight: '8px'
    },

    overline: {
      paddingTop:8,
      color:'#000'
    }
  };
};

class MarqueeCardSmallBase extends React.Component {
  render() {

    let {classes, byLineIcon, byLineText, title, overlineText, linkClassProps, imageResource} =  this.props;

    let image_url; // = 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQ2NzAwMDE/card_large.png';

    if (imageResource && imageResource.versions) {
      if (imageResource.versions.CARD_LARGE) {
        image_url = imageResource.versions.CARD_LARGE.url;
      }
      else if (imageResource.versions.CARD_SMALL) {
        image_url = imageResource.versions.CARD_SMALL.url;
      }
    } //  else ??

    let imageAttrs = {};
    if (image_url) {
      imageAttrs.style = {backgroundImage: 'url(' + image_url + ')'};
    }

    return (
      <div className={classes.root}>
        <div className={classnames(classes.byline)}>
          <i className={classnames('fa', byLineIcon, classes.byLineIcon)}></i>
          {byLineText}
        </div>

        <div className={classnames('imageWrapper', classes.imageWrapper)}>
          <div
            className={classnames('image', classes.image, 'withShadow')}
            {...imageAttrs}
          >
            <this.props.linkClass
              title={title}
              {...linkClassProps}
              className={classes.imageLink}>&nbsp;</this.props.linkClass>
          </div>
        </div>

        <this.props.linkClass
          title={title}
          {...linkClassProps}
          className={classes.contentContainer}
        >
          <div className={classes.contentContainerContent}>
            <Overline className={classnames('overline', classes.overline)}>{ overlineText }</Overline>
            <Typography className={classnames('primaryTitle', classes.primaryTitle)}>{ title }</Typography>
          </div>
        </this.props.linkClass>
      </div>
    );
  }
}

MarqueeCardSmallBase.propTypes = {
  classes: PropTypes.object,
  resource: PropTypes.object,
  byLineIcon: PropTypes.string,
  byLineText: PropTypes.node,
  title: PropTypes.string,
  overlineText: PropTypes.node,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  imageResource: PropTypes.object
};

export default withStyles(styles)(MarqueeCardSmallBase);