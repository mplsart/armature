'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CENTRAL_TIMEZONE = undefined;
var _jsxFileName = 'src/utils/dates/LegacyNiceDate.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _momentTimezone = require('moment-timezone/builds/moment-timezone.min');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Simple React Component to render a human readable date range


var CENTRAL_TIMEZONE = exports.CENTRAL_TIMEZONE = 'America/Chicago';

var NiceDate = function (_Component) {
  _inherits(NiceDate, _Component);

  function NiceDate() {
    _classCallCheck(this, NiceDate);

    return _possibleConstructorReturn(this, (NiceDate.__proto__ || Object.getPrototypeOf(NiceDate)).apply(this, arguments));
  }

  _createClass(NiceDate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          today_end_date_utc = _props.today_end_date_utc,
          is_user_central_timezone = _props.is_user_central_timezone; // Maybe via the context?

      var year_format = ' ';

      var start = (0, _momentTimezone2.default)(Date.parse(this.props.start)).tz(CENTRAL_TIMEZONE);
      var end = (0, _momentTimezone2.default)(Date.parse(this.props.end)).tz(CENTRAL_TIMEZONE);

      // This event ended in the past
      if (today_end_date_utc > end) {
        year_format = ', YYYY ';
      }

      // Default rendering: Nov 8th - Dec 10th
      var display_str = start.format('MMM Do') + ' - ' + end.format('MMM Do' + year_format);

      var duration_hours = end.diff(start, 'hours');

      // If the start and end are within 15 hours (arbitrary) this is 1 long day
      // TODO: this.state.eventdate_type == 'timed' might be a better indicator
      if (duration_hours < 15) {
        // Assumed to be a single timed event: Sat Nov 8th 7PM - 10:30PM

        var start_time_format = 'hA';
        var end_time_format = 'hA';

        if (start.minutes() > 0) {
          start_time_format = 'h:mmA';
        }

        if (end.minutes() > 0) {
          end_time_format = 'h:mmA';
        }

        display_str = start.format('ddd MMM Do' + year_format + start_time_format);

        // If we only want to display the start time (performance, artist talks, etc)
        if (!this.props.start_only) {
          display_str += ' - ';
          display_str += end.format(end_time_format);
        }

        // TODO: This breaks react reuse when browser is not in CST
        if (!is_user_central_timezone) {
          display_str += ' CST';
        }
      }

      return _react2.default.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        display_str,
        ' ',
        this.props.label
      );
    }
  }]);

  return NiceDate;
}(_react.Component);

exports.default = NiceDate;


NiceDate.propTypes = {
  start: _propTypes2.default.string.isRequired,
  end: _propTypes2.default.string.isRequired,
  start_only: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  today_end_date_utc: _propTypes2.default.any,
  is_user_central_timezone: _propTypes2.default.bool
};