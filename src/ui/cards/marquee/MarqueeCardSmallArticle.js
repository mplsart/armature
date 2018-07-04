import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import moment from 'moment';
import MarqueeCardSmallBase from './MarqueeCardSmallBase';

class MarqueeCardSmallArticle extends React.Component {
  render() {

    const {resource, ...rest} =  this.props;

    // Author Credit
    let overlineText = '';

    // Author resource is can be verbose only
    if (resource.author_name) {
      overlineText = ' by ' + resource.author_name;
    }
    else if (resource.author_resource) {
      overlineText = ' by ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
    }

    return (
      <MarqueeCardSmallBase
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

MarqueeCardSmallArticle.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default MarqueeCardSmallArticle;