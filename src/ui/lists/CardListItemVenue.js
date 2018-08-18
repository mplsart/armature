import React from 'react';
import PropTypes from 'prop-types';
import CardListItemBase from './CardListItemBase';
import {formatted_address} from '../../utils/location';

export default function CardListItemVenue({resource, divider, ...rest}) {
  // Image
  let imageUrl;
  let imageAltText = resource.name;
  if (resource.primary_image_resource && resource.primary_image_resource.versions && resource.primary_image_resource.versions.THUMB) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  return (
    <CardListItemBase
      divider={divider}
      button
      primaryText={resource.name}
      secondaryText={formatted_address(resource)}
      underlineText={resource.summary}
      imageUrl={imageUrl}
      imageAltText={imageAltText}
      {...rest}
      />
  );
}

CardListItemVenue.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  divider: PropTypes.bool
};