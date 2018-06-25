import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import classnames from 'classnames';

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
      width:'100%',
      height:0,
      display:'block',
      padding:'60% 0 0 0', // 60% v 52.42
      position:'relative',
      overflow: 'hidden',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      '&.withShadow': { },

      /*
      [theme.breakpoints.only('xs')]: {
        padding:'80% 0 0 0' // Card matches mobile marquee ad size theoretically
      },

      [theme.breakpoints.only('md')]: {
        padding:'60% 0 0 0' // Card matches mobile marquee ad size theoretically
      }
      */
    },
    contentContainer: {
      position:'absolute',
      bottom:0,
      width:'100%',
      height:'100%',
    },
    contentContainerContent: {
      position:'absolute',
      bottom:0,
      color: '#fff',
      padding: '32px',
      background: 'linear-gradient(transparent, black)',
      width:'100%',

      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        padding: '16px',
      },
    },

    primaryTitle: {
      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        ...theme.typography.display1,
        fontFamily: theme.fontFamily.accent,
        marginTop: '0',
        //fontSize:theme.typography.pxToRem(18),
        //lineHeight: theme.typography.pxToRem(18),
        fontWeight: 100,
        marginBottom:0,
        color: '#fafafa',
      },
      [theme.breakpoints.only('sm')]: {
        // Ipad in portrait and phones in landscape
        ...theme.typography.display2,
        fontFace: theme.fontFamily.accent,
        marginTop: 0,
        fontSize: '2.0rem',
        lineHeight: '2.2rem',
        fontWeight: 100,
        marginBottom:0,
        color: '#fafafa'
      },
      [theme.breakpoints.up('md')]: {
        ...theme.typography.display3,
        fontFamily: theme.fontFamily.accent,
        marginTop: 0,
        lineHeight: '2.5rem',
        fontWeight: 100,
        marginBottom:0,
        color: '#fafafa'
      },
      textAlign:'center'
    },

    byline: {
      display:'inline-block',
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      backgroundColor:'#fafafa',
      padding: '8px 16px 8px 8px',

      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        fontSize: '14px',
        padding: '0px 8px 0px 0px',
      },
    },

    byLineIcon: {
      marginRight: '8px'
    }
  };
};

function PromoCardVenue({classes, resource, linkClassProps, ...props}) {
  if (!resource) { return null; }

  //let image_url = 'https://storage.googleapis.com/cdn.mplsart.com/mocks/homepagev3/localfav_gamut.jpg';

  let image_url = resource.promo_image_resource.versions.CARD_LARGE.url; //'https://storage.googleapis.com/cdn.mplsart.com/mocks/homepagev3/900x540.jpg';

  let title = resource.name;

  return (
    <div className={classes.root}>

      <div className={classnames(classes.byline)}>
          <i className={classnames('fa', 'fa-map-marker', classes.byLineIcon)}></i>
          Local Favorite
        </div>

      <div className={classnames('imageWrapper', classes.imageWrapper)}>
        <div
          className={classnames('image', classes.image, 'withShadow')}
          style={{backgroundImage: 'url(' + image_url + ')'}}
        ></div>
      </div>

      <props.linkClass
        title={title}
        {...linkClassProps}
        className={classes.contentContainer}
      >
        <div className={classes.contentContainerContent}>
          <Typography className={classnames('primaryTitle', classes.primaryTitle)}>{title}</Typography>
        </div>
      </props.linkClass>
    </div>
  );
}

PromoCardVenue.propTypes = {
  classes: PropTypes.object,
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.func,
};

export default withStyles(styles)(PromoCardVenue);