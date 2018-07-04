'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/cards/standard/StandardCardEventDate.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _dates = require('../../../utils/dates');

var _StandardCardBase = require('./StandardCardBase');

var _StandardCardBase2 = _interopRequireDefault(_StandardCardBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StandardCardEventDate = function (_React$Component) {
  _inherits(StandardCardEventDate, _React$Component);

  function StandardCardEventDate() {
    _classCallCheck(this, StandardCardEventDate);

    return _possibleConstructorReturn(this, (StandardCardEventDate.__proto__ || Object.getPrototypeOf(StandardCardEventDate)).apply(this, arguments));
  }

  _createClass(StandardCardEventDate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          event_resource = _props.event_resource,
          event_date_resource = _props.event_date_resource,
          startingDateFilter = _props.startingDateFilter,
          rest = _objectWithoutProperties(_props, ['event_resource', 'event_date_resource', 'startingDateFilter']);

      // Event Date
      //let target_event_date = get_best_event_date(event_resource, startingDateFilter, 'timed');


      var target_event_date = event_date_resource;
      var byLineText = void 0;

      // If it is ongoing - worst case scenario
      if (target_event_date.category == 'ongoing') {
        byLineText = (0, _moment2.default)(new Date(target_event_date.start)).format('MMM D') + ' - ' + (0, _moment2.default)(new Date(target_event_date.end)).format('MMM D');
      } else {
        // Else show the end
        byLineText = (0, _moment2.default)(new Date(target_event_date.start)).format('MMM D');
      }

      // Venue
      var venue_resource = target_event_date.venue_resource;
      var venue_name = venue_resource.name;
      if (venue_resource.multiple_locations_label) {
        venue_name = venue_resource.multiple_locations_label;
      }

      // Overline
      var overlineText = target_event_date.label + ' @ ' + venue_name;

      return _react2.default.createElement(_StandardCardBase2.default, _extends({
        overlineText: overlineText,
        title: event_resource.name,
        byLineText: byLineText,
        byLineIcon: 'fa-calendar-o',
        imageResource: event_resource.primary_image_resource
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return StandardCardEventDate;
}(_react2.default.Component);

StandardCardEventDate.propTypes = {
  event_resource: _propTypes2.default.object,
  event_date_resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  startingDateFilter: _propTypes2.default.any // a moment date
};

exports.default = StandardCardEventDate;