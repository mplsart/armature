import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

function calc_aspect_ratio(h, w) {
  let ration = .75; // 600/1000

  return {height: h, width: w};
}

let styles = (theme) => {
  console.log(theme);

  return {
    root: { position: 'relative' },
    image: {
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTA2MDAwMDE/card_large.png)',
      width:'100%',
      height:0,
      display:'block',
      padding:'60% 0 0 0',
      position:'relative',
      overflow: 'hidden',

      '&.withShadow': {
      }
    },
    contentContainer: {
      position:'absolute',
      bottom:0,
      background: 'linear-gradient(transparent, black)',
      width:'100%',
      height:'60%',
    },
    contentContainerContent: {
      position:'absolute',
      bottom:0,
      color: '#fff',
      padding: '32px'
    },
    citation: {
      color: '#fff'
    },

    primaryTitle: {
      fontFamily: theme.fontFamily.accent,
      color: '#fff'
    }
  };
};

class MarqueeCardBase extends React.Component {
  render() {

    let {classes} =  this.props;

    let {height, width} = calc_aspect_ratio(900, 472);
    return (
      <div className={classes.root}>
        <a href="#" className={classnames(classes.image, 'withShadow')}>&nbsp;</a>
        <div className={classes.contentContainer}>
          <div className={classes.contentContainerContent}>

            <Typography className={classes.citation} variant="caption">Published March 5th by Sheila Regan</Typography>
            <Typography className={classes.primaryTitle} variant="display1">Between Boredom and the Body: Emmett Ramstad's Laying in Wait</Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MarqueeCardBase);