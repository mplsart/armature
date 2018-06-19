import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

const styles = (theme) => ({
  root: {
    border: '1px solid red',
    fontSize: '48px'
  },

  card: {
    // Old school card style
    'position':'relative',
    'margin':'0.5rem 0 1rem 0',
    'background-color':'#fff',
    'transition':'box-shadow .25s',
    'border-radius':'2px',
    'margin': theme.spacing.unit * 2,

    // Hoverable
    'transition':'box-shadow .25s',
    'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      'transition':'box-shadow .25s',
      'box-shadow':'0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
    }
  },
  cardContainer: { },
  cardContent: {
    'padding': '16px',
    'background-color': '#eee'
  },

  cardTitle: {
    ...theme.typography.body1,
    'font-size': '18px',
    'font-weight':400,
    'line-height': '1.25em',
    'padding-bottom': '.5em',

    '& a:hover': {
      'text-decoration': 'none'
    },
  },
  cardDetail: {
    ...theme.typography.body1,
    'font-size': '14px',
    'line-height': '1.45em',
    'color': '#000',
    'font-weight': 100,
  },
  cardDetailLarge: {
    'font-size': '16px',
  },

  cardImage: {
    '& a': {
      //.fixed-size a {
      /* Helper class for sizing image container in masonry layouts */

      'display': 'block',
      'position': 'relative',
      'height': '0',
      'overflow': 'hidden',
      //'padding': '52.42% 0 0 0', /* Note padding-top is overridden via JS */
      'background-color': '#eee',
      'width': '100%',

      // The Image Itself?
      '& img': {
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'margin': 'auto',
        width:'100%'
      }
    }
  },
  sponsorText: {
    ...theme.typography.body1,
    'position': 'absolute',
    'top':0,
    'color': '#ffffff',
    'font-size': '14px',
    'line-height': '1.5em',
    'padding-left':'8px',
    'padding-top':'4px',
    'opacity': '0.8',
  }
});

class LegacyCardBase extends React.Component {
  render() {
    let {classes, title, resource, imageResource, linkClassProps, width, variant} = this.props;
    let rootClasses = [classes.card];
    let image, image_url;

    if (!resource.image_resource) { return null; }

    // TODO: This needs a better convention.
    if (width == 'xs' && resource.image_resource.versions.MOBILE) {
      imageResource = resource.image_resource.versions.MOBILE;
    }

    if (!imageResource) {
      imageResource = resource.image_resource.versions.DEFAULT;
    }

    let scale_factor = Math.floor(100 * imageResource.height/imageResource.width * 100.00) /100.00;
    image_url = imageResource.url;
    image = (<this.props.linkClass
            title={title}
            style={{'padding':`${scale_factor}% 0 0 0`}}
            {...linkClassProps}>
            <img src={image_url} alt={title} />
          </this.props.linkClass>);

    // TODO: This is cruft, but we need to determine if it was in use anywhere...
    // Determine Image
    /*
    if (typeof imageResource == 'string') {
      image_url = imageResource;
      image = (<this.props.linkClass
            title={title}
            style={{'padding':`${scale_factor}% 0 0 0`}}
            {...linkClassProps}>
            <img src={image_url} alt={title} />
          </this.props.linkClass>);
    }
    else {
      if (variant == 'large' && imageResource.versions.CARD_LARGE) {
        image_url = imageResource.versions.CARD_LARGE.url;
      }
      else if (imageResource.versions.CARD_SMALL) {
        image_url = imageResource.versions.CARD_SMALL.url;
      }
      if (image_url) {
        image = (
          <this.props.linkClass
            title={title}
            style={{'padding':`${scale_factor}% 0 0 0`}}
            {...linkClassProps}>
            <img src={image_url} alt={title} />
          </this.props.linkClass>
        );
      }
    }
    */


    return (
      <div className={classnames(rootClasses)}>
        <div className={classes.cardContainer}>
          <div className="card-header">
            <div className={classes.cardImage}>{image}</div>
            <div className={classes.sponsorText}>{ resource.advert_type_label || 'advertisement' }</div>
          </div>
        </div>
      </div>
    );
  }
}

LegacyCardBase.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.oneOf(['large', 'small']),
  title: PropTypes.string,
  content: PropTypes.node,
  linkClass: PropTypes.func,
  linkClassProps: PropTypes.object,
  //href: PropTypes.string,
  imageResource: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  resource: PropTypes.object
};

LegacyCardBase.defaultProps = {
  variant: 'small'
};

export default compose(withWidth(), withStyles(styles))(LegacyCardBase);
//export default withStyles(styles)(LegacyCardBase);


