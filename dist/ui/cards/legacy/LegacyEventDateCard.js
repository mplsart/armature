'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {};
};

var LegacyEventDateCard = function (_React$Component) {
  _inherits(LegacyEventDateCard, _React$Component);

  function LegacyEventDateCard() {
    _classCallCheck(this, LegacyEventDateCard);

    return _possibleConstructorReturn(this, (LegacyEventDateCard.__proto__ || Object.getPrototypeOf(LegacyEventDateCard)).apply(this, arguments));
  }

  _createClass(LegacyEventDateCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          resource = _props.resource,
          rest = _objectWithoutProperties(_props, ['classes', 'resource']); // resource is left out for the moment


      var content = _react2.default.createElement(
        'div',
        null,
        'Two Stupid Dogs'
      );

      return _react2.default.createElement(_LegacyCardBase2.default, _extends({
        title: resource.name,
        content: content
      }, rest));
    }
  }]);

  return LegacyEventDateCard;
}(_react2.default.Component);

LegacyEventDateCard.propTypes = {
  classes: _propTypes2.default.object,
  variant: _propTypes2.default.string, // TODO: one of 'big'
  resource: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(LegacyEventDateCard);