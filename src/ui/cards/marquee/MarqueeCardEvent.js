import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {get_best_event_date} from '../../../utils/dates';
import MarqueeCardBase from './MarqueeCardBase';

class MarqueeCardEvent extends React.Component {
  render() {
    const { resource, startingDateFilter, ...rest} = this.props;

    // Event Date
    let target_event_date = get_best_event_date(resource, startingDateFilter, 'timed');
    let byLineText;

    // If it is ongoing - worst case scenario
    if (target_event_date.category == 'ongoing') {
      byLineText = moment(new Date(target_event_date.start)).format('MMM D') + ' - ' + moment(new Date(target_event_date.end)).format('MMM D');
    }
    else {
      // Else show the end
      byLineText = moment(new Date(target_event_date.start)).format('MMM D');
    }

    // Venue
    let venue_resource = target_event_date.venue;
    let venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
      venue_name = venue_resource.multiple_locations_label;
    }

    // Overline
    let overlineText = target_event_date.label + ' @ ' + venue_name;

    return (
      <MarqueeCardBase
        overlineText={overlineText}
        title={resource.name}
        byLineText={byLineText}
        byLineIcon="fa-calendar-o"
        imageResource={resource.primary_image_resource}
        {...rest}
       />
    );
  }
}

MarqueeCardEvent.propTypes = {
  resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  startingDateFilter: PropTypes.any // a moment date
};

export default MarqueeCardEvent;
