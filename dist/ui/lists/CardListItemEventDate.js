'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/lists/CardListItemEventDate.js';
exports.default = CardListItemEventDate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardListItemBase = require('./CardListItemBase');

var _CardListItemBase2 = _interopRequireDefault(_CardListItemBase);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CardListItemEventDate(_ref) {
  var resource = _ref.resource,
      divider = _ref.divider,
      rest = _objectWithoutProperties(_ref, ['resource', 'divider']);

  var target_event_date = resource;
  var event_resource = resource.event_resource;

  // Image
  var imageUrl = void 0;
  var imageAltText = event_resource.name;
  if (event_resource.primary_image_resource && event_resource.primary_image_resource.versions && event_resource.primary_image_resource.versions.THUMB) {
    imageUrl = event_resource.primary_image_resource.versions.THUMB.url;
  }

  var byLineText = '';
  var edLabel = '';
  // If it is ongoing - worst case scenario
  if (target_event_date.category == 'ongoing') {
    byLineText = (0, _moment2.default)(new Date(target_event_date.start)).format('MMM D') + ' - ' + (0, _moment2.default)(new Date(target_event_date.end)).format('MMM D');
  } else {
    // Else show the end
    byLineText = (0, _moment2.default)(new Date(target_event_date.start)).format('ddd MMM D');
    edLabel = target_event_date.label;
  }

  var overlineText = '';

  var venue_resource = resource.venue_resource;
  var venue_name = venue_resource.nickname || venue_resource.name;
  if (venue_resource.multiple_locations_label) {
    venue_name = venue_resource.multiple_locations_label;
  }

  // Overline
  overlineText = edLabel + ' @ ' + venue_name;

  return _react2.default.createElement(_CardListItemBase2.default, _extends({
    divider: divider,
    button: true,
    primaryText: event_resource.name,
    secondaryText: overlineText
    //underlineText={overlineText}
    , overlineText: byLineText,
    imageUrl: imageUrl,
    imageAltText: imageAltText
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }));
}

CardListItemEventDate.propTypes = {
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  divider: _propTypes2.default.bool
};