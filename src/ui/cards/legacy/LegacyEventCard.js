import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import LegacyCardBase from './LegacyCardBase';
import LegacyNiceDate from '../../../utils/dates/LegacyNiceDate';
import moment from 'moment-timezone/builds/moment-timezone.min';

// TODO: This should be in a lib
let CENTRAL_TIMEZONE = 'America/Chicago';
let browser_timezone = CENTRAL_TIMEZONE;
try {
  browser_timezone = moment.tz.guess();
} catch (err) {}


const styles = (theme) => ({
  eventDate: {
    fontWeight: 'bold'
  },
  eventAddress: {
    paddingTop: '5px'
  }
});

class LegacyEventCard extends React.Component {
  render() {
    let {classes, event_resource, event_date_resource, ...rest} = this.props; // resource is left out for the moment

    // Split out the event and the event date resources for simplicity
    let href = '/events/' + event_resource.slug;


    // Address
    let addressNodes;
    let venue;

    if (event_date_resource.venue_resource !== undefined) {
      venue = event_date_resource.venue_resource;
    }
    else {
      venue = event_date_resource.venue;
    }

    if (venue) {
      if (venue.multiple_locations_label) {
        addressNodes = (
          <div>
            <div className="card-detail event-venue-name">Various Locations</div>
            <div className="card-detail event-address">{venue.multiple_locations_label }</div>
          </div>
        );
      } else {
        addressNodes = (
          <div>
            <div className="card-detail event-venue-name">{venue.name}</div>
            <div className="card-detail event-address">{venue.address + ', ' + venue.city }</div>
          </div>
        );
      }
    }

    // Do we want to display a label:
    let label = event_date_resource.label;

    let dateNodes = (
      <LegacyNiceDate
        start={ event_date_resource.start }
        end={ event_date_resource.end }
        start_only={ event_date_resource.category == 'performance' }
        label={ label }
        is_user_central_timezone = {browser_timezone == CENTRAL_TIMEZONE}
        today_end_date_utc = {moment.utc(moment().tz(CENTRAL_TIMEZONE).hour(9).minute(0).second(0))}
      />
    );

    let content = (
      <div>
        <div className={classes.eventDate}>{dateNodes}</div>
        <div className={classes.eventAddress}>{addressNodes}</div>
      </div>
    );

    return (
      <LegacyCardBase
        title={event_resource.name}
        content={content}
        {...rest}
      />
    );
  }
}

LegacyEventCard.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string, // TODO: one of 'big'
  event_resource: PropTypes.object,
  event_date_resource: PropTypes.object,
  linkClassProps: PropTypes.object
};

export default withStyles(styles)(LegacyEventCard);