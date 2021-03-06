import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import StandardCardBase from './StandardCardBase';

class StandardCardEventDate extends React.Component {
  render() {
    const {event_resource, event_date_resource, ...rest} =  this.props;

    // Event Date
    let target_event_date = event_date_resource;
    let byLineText;

    // If it is ongoing - worst case scenario
    if (target_event_date.category == 'ongoing') {
      byLineText = moment(new Date(target_event_date.start)).format('MMM D') + ' - ' + moment(new Date(target_event_date.end)).format('MMM D');
    }
    else {
      // Else show the start
      byLineText = moment(new Date(target_event_date.start)).format('ddd MMM D');
    }

    // Venue
    let venue_resource = target_event_date.venue_resource;
    let venue_name = venue_resource.nickname || venue_resource.name;
    if (venue_resource.multiple_locations_label) {
      venue_name = venue_resource.multiple_locations_label;
    }

    // Overline
    let overlineText = target_event_date.label + ' @ ' + venue_name;

    return (
      <StandardCardBase
        overlineText={overlineText}
        title={event_resource.name}
        byLineText={byLineText}
        byLineIcon="fa-calendar-o"
        imageResource={event_resource.primary_image_resource}
        {...rest}
       />
    );
  }
}

StandardCardEventDate.propTypes = {
  event_resource: PropTypes.object,
  event_date_resource: PropTypes.object,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  startingDateFilter: PropTypes.any // a moment date
};

export default StandardCardEventDate;