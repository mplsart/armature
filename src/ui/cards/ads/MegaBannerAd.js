import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = (theme) => ({
  adContainer: {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
  },

  card: {
    'position':'relative',
    'background-color':'#fff',
    'transition':'box-shadow .25s',
    'border-radius':'2px',
    'marginTop': theme.gutterSpacing / 2,
    'marginBottom': theme.gutterSpacing / 2,

    // Hover state
    'transition':'box-shadow .25s',
    '&:hover': {
      //'box-shadow':'0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
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
      backgroundImage: 'url("https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-1220px_wide.jpg")',
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
    'padding-left':'16px',
    paddingTop:'8px',
    'opacity': '0.8',
  }
});


class MegaBannerAd extends React.Component {
  render() {
    const {classes, width, adspotId, resource} = this.props;

    // Determine Image to use based on device/breakpoints
    let imageUrl, h, w;

    h = 138;
    w = 1220;
    imageUrl = 'https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-1220px_wide.jpg';

    if (width == 'xs') {
      h = 100;
      w = 304;
      imageUrl = 'https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-304px_wide.jpg';
    }

    let title = 'yolo';
    let scale_factor = Math.floor(100 * h/w * 100.00) /100.00;
    let adImageStyles = {
      paddingTop: `${scale_factor}%`,
      backgroundImage: `url("${imageUrl}")`
    };

    let linkClassProps = { href: 'http://google.com', target: '_new'};

    let linkNode = (
      <a
        title={title}
        style={adImageStyles}
        {...linkClassProps}>
      </a>
    );

    return (
      <div className={classnames(classes.adContainer)}>
        <div className={classnames(classes.card)}>
            <div className="card-header">
              <div className={classes.cardImage}>
                {linkNode}
              </div>
              <div className={classes.sponsorText}>
                {resource.advert_type_label || 'advertisement'} ({width})</div>
            </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(MegaBannerAd);

MegaBannerAd.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  adspotId: PropTypes.string.isRequired,
  resource: PropTypes.object,
};