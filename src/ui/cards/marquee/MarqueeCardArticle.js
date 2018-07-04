import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import MarqueeCardBase from './MarqueeCardBase';

class MarqueeCardArticle extends React.Component {
  render() {
    const { resource, ...rest} = this.props;

    // Published Date
    let publishedDate = moment(new Date(resource.published_date)).format('MMMM Do, YYYY');

    // Author Credit
    let extraOverline = '';

    // Author resource is can be verbose only
    if (resource.author_name) {
      extraOverline = ' by ' + resource.author_name;
    }
    else if (resource.author_resource) {
      extraOverline = ' by ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
    }

    // Overline
    let overlineText = 'Published ' + publishedDate + extraOverline;

    return (
      <MarqueeCardBase
        overlineText={overlineText}
        title={resource.title}
        byLineText="New Article"
        byLineIcon="fa-newspaper-o"
        imageResource={resource.primary_image_resource}
        {...rest}
       />
    );
  }
}


MarqueeCardArticle.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default MarqueeCardArticle;
