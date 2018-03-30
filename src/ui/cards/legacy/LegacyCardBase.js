import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

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
    'margin':'8px',

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

  cardImage: {
    '& a': {
      //.fixed-size a {
      /* Helper class for sizing image container in masonry layouts */

      'display': 'block',
      'position': 'relative',
      'height': '0',
      'overflow': 'hidden',
      'padding': '52.42% 0 0 0', /* Note padding-top is overridden via JS */
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
  }
});

class LegacyCard extends React.Component {
  render() {
    let {classes, title, content, variant} = this.props;

    let rootClasses = [classes.card];

    let image;
    return (
      <div className={classnames(rootClasses)}>
        <div className={classes.cardContainer}>
          <div className="card-header">
              <div className={classes.cardImage}>
                <a
                  title={title}
                  style={{'padding':'52.57% 0 0 0'}}
                  href="/events/illoshow-at-solid-state-vinyl-records" data-reactid="65">
                  <img src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTYzNTAwMDE/card_small.png" />
                  </a>
              </div>
            </div>

            <div className={classes.cardContent}>
              <div className={classes.cardTitle}><a href="#">{title}</a></div>
              <div className={classes.cardDetail}>{ content }</div>
            </div>
        </div>
      </div>
    );
  }
}
LegacyCard.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string, // TODO: one of 'big'
  title: PropTypes.string,
  content: PropTypes.node

};

export default withStyles(styles)(LegacyCard);


