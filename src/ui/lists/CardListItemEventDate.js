import React from 'react';
import PropTypes from 'prop-types';
import CardListItemBase from './CardListItemBase';
import moment from 'moment';

export default function CardListItemEventDate({resource, divider, ...rest}) {

  let target_event_date = resource;
  let event_resource = resource.event_resource;

  // Image
  let imageUrl;
  let imageAltText = event_resource.name;
  if (event_resource.primary_image_resource && event_resource.primary_image_resource.versions && event_resource.primary_image_resource.versions.THUMB) {
    imageUrl = event_resource.primary_image_resource.versions.THUMB.url;
  }

  let byLineText = '';
  let edLabel = '';
  // If it is ongoing - worst case scenario
  if (target_event_date.category == 'ongoing') {
    byLineText = moment(new Date(target_event_date.start)).format('MMM D') + ' - ' + moment(new Date(target_event_date.end)).format('MMM D');
  }
  else {
    // Else show the end
    byLineText = moment(new Date(target_event_date.start)).format('ddd MMM D');
    edLabel = target_event_date.label;
  }

  let overlineText = '';

  let venue_resource = resource.venue_resource;
  let venue_name = venue_resource.nickname || venue_resource.name;
  if (venue_resource.multiple_locations_label) {
    venue_name = venue_resource.multiple_locations_label;
  }

  // Overline
  overlineText = edLabel + ' @ ' + venue_name;


  return (
    <CardListItemBase
      divider={divider}
      button
      primaryText={event_resource.name}
      secondaryText={overlineText}
      //underlineText={overlineText}
      overlineText={byLineText}
      imageUrl={imageUrl}
      imageAltText={imageAltText}
      {...rest}
      />
  );
}

CardListItemEventDate.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  divider: PropTypes.bool
};