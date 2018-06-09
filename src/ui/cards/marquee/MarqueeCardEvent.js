import React from 'react';

import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Overline from '../../../../src/typography/Overline';
//import ContentTitle from '../../../../src/typography/ContentTitle';

function calc_aspect_ratio(h, w) {
  let ration = .75; // 600/1000
  return {height: h, width: w};
}

let styles = (theme) => {
  //console.log(theme);

  return {
    root: {
      position: 'relative',
      //margin: '0 16px 0px 16px',
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
      backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTA2NzAwMDI/card_large.png)',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      height:0,
      display:'block',
      padding:'60% 0 0 0',
      position:'relative',
      overflow: 'hidden',
      '&.withShadow': {},

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
      //position:'absolute',
      //bottom:0,
      width:'100%',
      //height:'50%',
      //height:'100%',
      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        //height:'60%',
      },
    },
    contentContainerContent: {
      //position:'absolute',
      bottom:0,
      //color: '#fff',
      padding: '0px',
      //background: 'linear-gradient(transparent, black)',

      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        padding: 8,
      },
    },
    //citation: {
    //  color: '#fff'
    //},

    primaryTitle: {
      //[theme.breakpoints.up('xs')]: {
        // Phones in portrait
       ...theme.typography.display2,
        fontFamily: theme.fontFamily.accent,
        marginTop: '0.35em',
        fontSize:'1rem',
        lineHeight: '1.2rem',
        fontWeight: 400,
        marginBottom:0,

        //color: '#fafafa'
      //},
      /*
      [theme.breakpoints.up('sm')]: {
        // Ipad in portrait and phones in landscape
        ...theme.typography.display2,
        fontFace: theme.fontFamily.accent,
        marginTop: '0.35em',
        fontSize: '2.0rem',
        lineHeight: '2.2rem',
        fontWeight: 400,
        marginBottom:0,
        color: '#fafafa'
      },
      [theme.breakpoints.up('md')]: {
        ...theme.typography.display3,
        fontFace: theme.fontFamily.accent,
        marginTop: '0.35em',
        lineHeight: '2.75rem',
        fontWeight: 400,
        marginBottom:0,
        color: '#fafafa'
      },
      */
    },

    byline: {
      display:'inline-block',
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      backgroundColor:'#fafafa',
      padding: '8px 16px 8px 8px',

      //[theme.breakpoints.only('xs')]: {
        // Phones in portrait
        fontSize: '14px',
        padding: '0px 8px 0px 0px',
      //},
    },
    overline: {
      paddingTop:8,
      color:'#000'
    }
  };
};

class MarqueeCardEvent extends React.Component {
  render() {

    let {classes} =  this.props;

    let {height, width} = calc_aspect_ratio(900, 472);

    return (
      <div className={classes.root}>
        <div className={classnames(classes.byline)}>
        <i className="fa fa-calendar-o" style={{marginRight: '8px'}}></i>

        {/* Icon className={'fa fa-newspaper-o'}></Icon> */ }

        April 16th</div>


        <div className={classnames('imageWrapper', classes.imageWrapper)}>
          <div className={classnames('image', classes.image, 'withShadow')}>
            <a href="google.com" className={classes.imageLink}></a>
          </div>
        </div>
        <a href="google.com" className={classes.contentContainer}>
          <div className={classes.contentContainerContent}>
            <Overline className={classnames('overline', classes.overline)}>Artist Talk @ SooVAC</Overline>
            <Typography className={classnames('primaryTitle', classes.primaryTitle)}>The Things They Carried On: A new public art project humanizes immigration</Typography>
          </div>
        </a>

      </div>
    );
  }
}

export default withStyles(styles)(MarqueeCardEvent);