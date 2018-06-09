import React from 'react';

import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import Overline from '../../../../src/typography/Overline';
//import ContentTitle from '../../../../src/typography/ContentTitle';

function calc_aspect_ratio(h, w) {
  let ration = .75; // 600/1000
  return {height: h, width: w};
}

let styles = (theme) => {
  console.log(theme);

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
      backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQ2NzAwMDE/card_large.png)',
      width:'100%',
      height:0,
      display:'block',
      padding:'60% 0 0 0',
      position:'relative',
      overflow: 'hidden',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      '&.withShadow': {
      }
    },
    contentContainer: {
      position:'absolute',
      bottom:0,
      width:'100%',
      //height:'50%',
      height:'100%',
      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        //height:'60%',
      },
    },
    contentContainerContent: {
      position:'absolute',
      bottom:0,
      color: '#fff',
      padding: '32px',
      background: 'linear-gradient(transparent, black)',

      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        padding: '16px',
      },
    },
    //citation: {
    //  color: '#fff'
    //},

    primaryTitle: {
      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        ...theme.typography.display1,
        fontFamily: theme.fontFamily.accent,
        marginTop: '0',
        fontSize:'1rem',
        lineHeight: '1.2rem',
        fontWeight: 400,
        marginBottom:0,
        color: '#fafafa'
      },
      [theme.breakpoints.only('sm')]: {
        // Ipad in portrait and phones in landscape
        ...theme.typography.display2,
        fontFace: theme.fontFamily.accent,
        marginTop: 0,
        fontSize: '2.0rem',
        lineHeight: '2.2rem',
        fontWeight: 400,
        marginBottom:0,
        color: '#fafafa'
      },
      [theme.breakpoints.up('md')]: {
        ...theme.typography.display3,
        fontFamily: theme.fontFamily.accent,
        marginTop: 0,
        lineHeight: '2.5rem',
        fontWeight: 400,
        marginBottom:0,
        color: '#fafafa'
      },
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
    }
  };
};

class MarqueeCardBase extends React.Component {
  render() {

    let {classes} =  this.props;

    let {height, width} = calc_aspect_ratio(900, 472);

    return (
      <div className={classes.root}>
        <div className={classnames(classes.byline)}>
        <i className="fa fa-newspaper-o" style={{marginRight: '8px'}}></i>

        {/* Icon className={'fa fa-newspaper-o'}></Icon> */ }

        New Article</div>

        <div className={classnames('imageWrapper', classes.imageWrapper)}>
          <div className={classnames('image', classes.image, 'withShadow')}></div>
        </div>
        <a href="google.com" className={classes.contentContainer}>
          <div className={classes.contentContainerContent}>
            <Overline>Published March 5th, 2018 by Sheila Regan</Overline>
            <Typography className={classnames('primaryTitle', classes.primaryTitle)}>Between Boredom and the Body: Emmett Ramstad's Laying in Wait</Typography>
          </div>
        </a>
      </div>
    );
  }
}

export default withStyles(styles)(MarqueeCardBase);