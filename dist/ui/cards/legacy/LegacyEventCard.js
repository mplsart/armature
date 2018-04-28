'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/cards/legacy/LegacyEventCard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LegacyCardBase = require('./LegacyCardBase');

var _LegacyCardBase2 = _interopRequireDefault(_LegacyCardBase);

var _LegacyNiceDate = require('../../../utils/dates/LegacyNiceDate');

var _LegacyNiceDate2 = _interopRequireDefault(_LegacyNiceDate);

var _momentTimezone = require('moment-timezone/builds/moment-timezone.min');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: This should be in a lib
var CENTRAL_TIMEZONE = 'America/Chicago';
var browser_timezone = CENTRAL_TIMEZONE;
try {
  browser_timezone = _momentTimezone2.default.tz.guess();
} catch (err) {}

var styles = function styles(theme) {
  return {
    eventDate: {
      fontWeight: 'bold'
    },
    eventAddress: {
      paddingTop: '5px'
    }
  };
};

var LegacyEventCard = function (_React$Component) {
  _inherits(LegacyEventCard, _React$Component);

  function LegacyEventCard() {
    _classCallCheck(this, LegacyEventCard);

    return _possibleConstructorReturn(this, (LegacyEventCard.__proto__ || Object.getPrototypeOf(LegacyEventCard)).apply(this, arguments));
  }

  _createClass(LegacyEventCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          event_resource = _props.event_resource,
          event_date_resource = _props.event_date_resource,
          rest = _objectWithoutProperties(_props, ['classes', 'event_resource', 'event_date_resource']); // resource is left out for the moment

      // Split out the event and the event date resources for simplicity


      var href = '/events/' + event_resource.slug;

      // Address
      var addressNodes = void 0;
      var venue = void 0;

      if (event_date_resource.venue_resource !== undefined) {
        venue = event_date_resource.venue_resource;
      } else {
        venue = event_date_resource.venue;
      }

      if (venue) {
        if (venue.multiple_locations_label) {
          addressNodes = _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'card-detail event-venue-name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              'Various Locations'
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-detail event-address', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              venue.multiple_locations_label
            )
          );
        } else {
          addressNodes = _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'card-detail event-venue-name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              venue.name
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-detail event-address', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              venue.address + ', ' + venue.city
            )
          );
        }
      }

      // Do we want to display a label:
      var label = event_date_resource.label;

      var dateNodes = _react2.default.createElement(_LegacyNiceDate2.default, {
        start: event_date_resource.start,
        end: event_date_resource.end,
        start_only: event_date_resource.category == 'performance',
        label: label,
        is_user_central_timezone: browser_timezone == CENTRAL_TIMEZONE,
        today_end_date_utc: _momentTimezone2.default.utc((0, _momentTimezone2.default)().tz(CENTRAL_TIMEZONE).hour(9).minute(0).second(0)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      });

      var content = _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        _react2.default.createElement(
          'div',
          { className: classes.eventDate, __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          dateNodes
        ),
        _react2.default.createElement(
          'div',
          { className: classes.eventAddress, __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          addressNodes
        )
      );

      return _react2.default.createElement(_LegacyCardBase2.default, _extends({
        title: event_resource.name,
        content: content
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }));
    }
  }]);

  return LegacyEventCard;
}(_react2.default.Component);

LegacyEventCard.propTypes = {
  classes: _propTypes2.default.object,
  variant: _propTypes2.default.string, // TODO: one of 'big'
  event_resource: _propTypes2.default.object,
  event_date_resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(LegacyEventCard);