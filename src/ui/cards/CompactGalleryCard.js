// TODO: This is a info window emulating ListItem...
// TODO: Make this a base component

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Icon from 'material-ui/Icon';
// import { Link } from 'react-router';
import ListItemActionButton from '../../ui/buttons/ListItemActionButton';
import { CardMedia } from 'material-ui/Card';
import { ListItemIcon } from 'material-ui/List';

import {build_google_map_url_for_venue, formatted_address} from '../../utils/location';

const styles = (theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      margin:theme.spacing.unit
    },
    iconStyle: {
      fontSize:'16px',
      verticalAlign:'sub', // hacky...
    },
    image: {
      width: '5rem',
      height: '5rem',
      marginLeft: theme.spacing.unit * 2,
      marginRight:'0px'
    },
    text: {
      color: 'rgba(0, 0, 0, 0.54)',
      '& h3': {
        color: '#111111' //theme.palette.primary['500'] //'#039be5',
      }
    },
    mapLink: {
      color: theme.typography.caption.color,
      textDecoration: 'underline',
      textDecorationStyle: 'dotted',

      '&:hover': {
        textDecoration: 'underline',
        textDecorationStyle: 'solid',
        color: theme.palette.primary['500']
      }
    }
  };
};

function PopoverRenderer({classes, resource}) {
  if (!(resource && resource.resource_id)) {
    return null;
  }

  // Image
  //let imageUrl = 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTUwNDAwMDE/thumb.png';
  let imageUrl;
  let imageAltText = resource.name;
  if (resource.primary_image_resource) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  let imageNode;
  if (imageUrl) {
    imageNode = (
      <ListItemIcon>
        <CardMedia
          className={classes.image}
          image={ imageUrl }
          title={ imageAltText }
        />
      </ListItemIcon>
    );
  }

  // Text Content
  let primary_text, secondary_text;
  primary_text = resource.name;

  secondary_text = (
    <span>
      {resource.summary && (<span style={{display:'block'}}><em>{ resource.summary}</em></span>)}
      <Icon className={classes.iconStyle}>place</Icon>
      <span><a href={ build_google_map_url_for_venue(resource)} target="_new" className={classes.mapLink}>{formatted_address(resource)}</a></span>
      <br />

      {resource.is_premium_profile &&
        (<ListItemActionButton
            variant="raised"
            color="primary"
                            /*
        // Figure out how to bind click handlers in google maps...
        component={({...props}) => {
        return (<Link to={{
        pathname: `/galleries/${resource.slug}`,
                state: { modal: true, returnTo: '/gallery/guide?' }
              }} {...props} />);
          }}
          */
            href={`/galleries/${resource.slug}`}
            target="_new">Profile</ListItemActionButton>
        )
      }
    </span>);

  return (
    <div className={classes.root}>
      <div className={classNames(classes.text)}>
          <Typography variant="subheading">{ primary_text }</Typography>
          <Typography variant="cpation" className={classNames(classes.text)} >{secondary_text}</Typography>
      </div>
      {resource.is_premium_profile && imageNode }
    </div>
  );
}

PopoverRenderer.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  resource: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PopoverRenderer);
