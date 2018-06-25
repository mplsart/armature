import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  adContainer: {
    //borderTop: '1px solid black',
    //borderBottom: '1px solid black',
  },

  card: {
    'position':'relative',
    'background-color':'#fff',
    'transition':'box-shadow .25s',
    'border-radius':'2px',
    //'marginTop': theme.gutterSpacing / 2,
    //'marginBottom': theme.gutterSpacing / 2,

    // Hover state
    'transition':'box-shadow .25s',
    '&:hover': {
      'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
    }
  },

  cardContent: {
    'padding': '16px',
    'background-color': '#eee'
  },

  cardImage: {
    '& a': {
      'display': 'block',
      'position': 'relative',
      'height': '0',
      'overflow': 'hidden',
      'background-color': '#eee',
      'width': '100%',

      backgroundPosition:'center',
      backgroundSize:'cover',
      height:0,
      display:'block',
      padding:'60% 0 0 0',
      position:'relative',

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
    'font-size': '12px',
    'line-height': '1.5em',
    'padding-left':'8px',
    paddingTop:'4px',
    'opacity': '0.8',
  }
});


class CardAd extends React.Component {
  render() {
    const {classes, width, resource, linkClassProps} = this.props;

    // Determine Image to use based on device/breakpoints
    let imageResource, imageUrl, h, w;

    // Bail if we have an ad resource but it doesn't have images
    if (!resource.image_resource) { return null; }

    if (width == 'xs' && resource.image_resource.versions.MOBILE) {
      imageResource = resource.image_resource.versions.MOBILE;
    }

    if (!imageResource) {
      imageResource = resource.image_resource.versions.DEFAULT;
    }

    h = imageResource.height;
    w = imageResource.width;
    imageUrl = imageResource.url;

    let scale_factor = Math.floor(100 * h/w * 100.00) /100.00;
    let adImageStyles = {
      paddingTop: `${scale_factor}%`,
      backgroundImage: `url("${imageUrl}")`
    };

    let linkNode = (
      <this.props.linkClass
        {...linkClassProps}
        style={adImageStyles}>&nbsp;
      </this.props.linkClass>
    );

    return (
      <div className={classnames(classes.adContainer)}>
        <div className={classnames(classes.card)}>
            <div className="card-header">
              <div className={classes.cardImage}>
                {linkNode}
              </div>
              <div className={classes.sponsorText}>
                {resource.advert_type_label || 'advertisement'}</div>
            </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(CardAd);

CardAd.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.func
};