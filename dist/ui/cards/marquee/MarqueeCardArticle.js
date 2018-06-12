'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/cards/marquee/MarqueeCardArticle.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _MarqueeCardBase = require('./MarqueeCardBase');

var _MarqueeCardBase2 = _interopRequireDefault(_MarqueeCardBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarqueeCardArticle = function (_React$Component) {
  _inherits(MarqueeCardArticle, _React$Component);

  function MarqueeCardArticle() {
    _classCallCheck(this, MarqueeCardArticle);

    return _possibleConstructorReturn(this, (MarqueeCardArticle.__proto__ || Object.getPrototypeOf(MarqueeCardArticle)).apply(this, arguments));
  }

  _createClass(MarqueeCardArticle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          resource = _props.resource,
          rest = _objectWithoutProperties(_props, ['resource']);

      // Published Date


      var publishedDate = (0, _moment2.default)(new Date(resource.published_date)).format('MMMM Do, YYYY');

      // Author Credit
      var authorName = resource.author_resource.firstname + ' ' + resource.author_resource.lastname;

      // Overline
      var overlineText = 'Published ' + publishedDate + ' by ' + authorName;

      return _react2.default.createElement(_MarqueeCardBase2.default, _extends({
        overlineText: overlineText,
        title: resource.title,
        byLineText: 'New Article',
        byLineIcon: 'fa-newspaper-o',
        imageResource: resource.primary_image_resource
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return MarqueeCardArticle;
}(_react2.default.Component);

MarqueeCardArticle.propTypes = {
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.any //PropTypes.func,
};

exports.default = MarqueeCardArticle;