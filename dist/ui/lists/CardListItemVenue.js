'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/lists/CardListItemVenue.js';
exports.default = CardListItemVenue;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardListItemBase = require('./CardListItemBase');

var _CardListItemBase2 = _interopRequireDefault(_CardListItemBase);

var _location = require('../../utils/location');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CardListItemVenue(_ref) {
  var resource = _ref.resource,
      divider = _ref.divider,
      rest = _objectWithoutProperties(_ref, ['resource', 'divider']);

  // Image
  var imageUrl = void 0;
  var imageAltText = resource.name;
  if (resource.primary_image_resource && resource.primary_image_resource.versions && resource.primary_image_resource.versions.THUMB) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  return _react2.default.createElement(_CardListItemBase2.default, _extends({
    divider: divider,
    button: true,
    primaryText: resource.name,
    secondaryText: (0, _location.formatted_address)(resource),
    underlineText: resource.summary,
    imageUrl: imageUrl,
    imageAltText: imageAltText
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
}

CardListItemVenue.propTypes = {
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  divider: _propTypes2.default.bool
};