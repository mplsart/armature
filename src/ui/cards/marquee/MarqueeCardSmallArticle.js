import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import moment from 'moment';
import MarqueeCardSmallBase from './MarqueeCardSmallBase';

class MarqueeCardSmallArticle extends React.Component {
  render() {

    const {resource, ...rest} =  this.props;

    // Published Date
    let publishedDate = moment(new Date(resource.published_date)).format('MMMM Do');

    // Author Credit
    let authorName = resource.author_resource.firstname + ' ' + resource.author_resource.lastname;

    // Overline
    let overlineText = 'By ' + authorName;

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

MarqueeCardSmallBase.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.any, //PropTypes.func,
};

export default MarqueeCardSmallArticle;