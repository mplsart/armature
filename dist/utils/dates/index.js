'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sort_event_dates_by_start = sort_event_dates_by_start;
exports.get_best_event_date = get_best_event_date;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sort_event_dates_by_start(ed1, ed2) {
    // Usage: let sorted = event_resource.event_dates.sort(sort_eventdates_by_start)
    return (0, _moment2.default)(ed1.start) - (0, _moment2.default)(ed2.start);
}

/** Given an event resource, attempt to find the best event date based on filter
 *
 *
 */
// Date Utils and components
function get_best_event_date(event_resource, starting_date_filter) {
    var type_filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var target_event_date = null;
    //var now = get_runtime_constants().today_end_date_utc;
    //var start_today = get_runtime_constants().today_start_date_utc;

    // This check is mostly for broken data
    if (!event_resource.event_dates) {
        return null;
    }

    var sorted_event_dates = event_resource.event_dates.sort(sort_event_dates_by_start);

    // If there is an event date type filter, find the first occurence of the match, and in the case of the 'timed' events, the first that hasn't started yet
    if (type_filter) {
        for (var i in sorted_event_dates) {

            if (sorted_event_dates[i].type == type_filter) {
                if (type_filter == 'timed' && (0, _moment2.default)(sorted_event_dates[i].start) > starting_date_filter || type_filter != 'timed') {
                    target_event_date = sorted_event_dates[i];
                    break;
                }
            }
        }
    } else {}
    // No targeted date type so lets find the soonest one that hasn't happened yet


    // Worst case scenerio, go with the first
    if (!target_event_date) {
        target_event_date = sorted_event_dates[0];
    }
    return target_event_date;
}

/*
class Goober extends Component {

    get_goodest_eventdate(e, ed_filter) {
        // TODO: This should really use this.state.resource
        // TODO: If there are multiple dates with the same ed_filter, only the 1st will be displayed

        var target_event_date = null;
        var now = get_runtime_constants().today_end_date_utc;
        var start_today = get_runtime_constants().today_start_date_utc;

        // Figure out the best event Date to display
        var sorted_event_dates = e.event_dates.sort(sort_helper);

        // If there is an event date type filter, find the first occurence of the match, and in the case of the 'timed' events, the first that hasn't started yet
        if (ed_filter) {
            for (var i in sorted_event_dates) {
                if (sorted_event_dates[i].type == ed_filter) {
                    if ((ed_filter == 'timed' && moment(sorted_event_dates[i].start) > start_today) || (ed_filter != 'timed')) {
                        target_event_date = sorted_event_dates[i];
                        break;
                    }
                }
            }

            // This is mostly for debugging...
            if (!target_event_date) {
                target_event_date = e.event_dates[0];
                //console.error('Warning: Failed to find an ed for event ' + e.slug + ' with a ed.type matching "' + ed_filter  + '". Defaulting to first found one. ');
            }
        }
        else {
            // No targeted date so lets find the soonest one that hasn't happened yet

            var reoccurring;
            var ed;

            for (var i in sorted_event_dates) {
                ed = sorted_event_dates[i];
                if (ed.type == 'timed' && moment(ed.start) > now) {
                    target_event_date = ed;
                    break;
                }
                if (ed.type == 'reoccurring') {
                    reoccurring = ed;
                }
            }

            if (!target_event_date) {
                if (reoccurring) {
                    target_event_date = reoccurring;
                }
                else {
                    // Event is in the past and there are no reoccurring dates??
                    target_event_date = sorted_event_dates[0]
                }
            }
        }
        return target_event_date;

    }
  }
*/