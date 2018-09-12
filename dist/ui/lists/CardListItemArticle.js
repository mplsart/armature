'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/lists/CardListItemArticle.js';
exports.default = CardListItemArticle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardListItemBase = require('./CardListItemBase');

var _CardListItemBase2 = _interopRequireDefault(_CardListItemBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 2) + '...' : str;
};

function CardListItemArticle(_ref) {
  var resource = _ref.resource,
      divider = _ref.divider,
      rest = _objectWithoutProperties(_ref, ['resource', 'divider']);

  // Image
  var imageUrl = void 0;
  var imageAltText = resource.title;
  if (resource.primary_image_resource && resource.primary_image_resource.versions && resource.primary_image_resource.versions.THUMB) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  // Author Credit
  var overlineText = '';

  // Author resource is can be verbose only
  if (resource.author_name) {
    overlineText = 'By  ' + resource.author_name;
  } else if (resource.author_resource) {
    overlineText = 'By  ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
  }

  return _react2.default.createElement(_CardListItemBase2.default, _extends({
    divider: divider,
    button: true,
    primaryText: truncate(resource.title, 55),
    overlineText: overlineText,
    imageUrl: imageUrl,
    imageAltText: imageAltText
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }));
}

CardListItemArticle.propTypes = {
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  divider: _propTypes2.default.bool
};