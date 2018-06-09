'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/typography/Overline.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Common typography elements


var styles = function styles() {
  return {
    root: { marginTop: '0.35em', fontWeight: 100 }
  };
};

var Overline = function (_React$Component) {
  _inherits(Overline, _React$Component);

  function Overline() {
    _classCallCheck(this, Overline);

    return _possibleConstructorReturn(this, (Overline.__proto__ || Object.getPrototypeOf(Overline)).apply(this, arguments));
  }

  _createClass(Overline, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['classes', 'children']);

      return _react2.default.createElement(
        _Typography2.default,
        _extends({
          component: 'span',
          variant: 'caption',
          className: classes.root,
          gutterBottom: true,
          color: 'inherit'
        }, rest, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }),
        children
      );
    }
  }]);

  return Overline;
}(_react2.default.Component);

Overline.propTypes = {
  children: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(Overline);