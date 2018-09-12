import React from 'react';
import PropTypes from 'prop-types';
import CardListItemBase from './CardListItemBase';

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-2) + '...' : str;
};

export default function CardListItemArticle({resource, divider, ...rest}) {
  // Image
  let imageUrl;
  let imageAltText = resource.title;
  if (resource.primary_image_resource && resource.primary_image_resource.versions && resource.primary_image_resource.versions.THUMB) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  // Author Credit
  let overlineText = '';

  // Author resource is can be verbose only
  if (resource.author_name) {
    overlineText = 'By  ' + resource.author_name;
  }
  else if (resource.author_resource) {
    overlineText = 'By  ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
  }

  return (
    <CardListItemBase
      divider={divider}
      button
      primaryText={truncate(resource.title, 55)}
      overlineText={overlineText}
      imageUrl={imageUrl}
      imageAltText={imageAltText}
      {...rest}
      />
  );
}

CardListItemArticle.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  divider: PropTypes.bool
};