import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import StandardCardBase from './StandardCardBase';

class StandardCardArticle extends React.Component {
  render() {

    const {resource, ...rest} =  this.props;

    // Published Date
    //let publishedDate = moment(new Date(resource.published_date)).format('MMMM Do, YYYY');
    let publishedDate = moment(new Date(resource.published_date)).format('MMM D');

    // Author Credit
    let extraOverline = '';

    // Author resource is can be verbose only
    if (resource.author_name) {
      extraOverline = ' By ' + resource.author_name;
    }
    else if (resource.author_resource) {
      extraOverline = ' By ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
    }

    // Overline
    let overlineText = extraOverline;

    let byLineText = publishedDate;
    return (
      <StandardCardBase
        overlineText={overlineText}
        title={resource.title}
        byLineText={byLineText}
        byLineIcon="fa-newspaper-o"
        imageResource={resource.primary_image_resource}
        {...rest}
       />
    );
  }
}

StandardCardArticle.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default StandardCardArticle;