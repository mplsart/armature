'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var globalStyles = function globalStyles(theme) {

  return {
    '@global': {
      'body, html': _extends({
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset'
      }, theme.typography.body1),
      'a': {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
        fontWeight: 400
      },

      // Headers - note margin is equivalent to gutterBottom=True Typography prop
      'h1': _extends({}, theme.typography.display3, { margin: '0 -.02em 0.35em 0' }),
      'h2': _extends({}, theme.typography.display2, { margin: '0 -.02em 0.35em 0' }),
      'h3': _extends({}, theme.typography.display1, { margin: '0 0 0.35em 0' }),
      'h4': _extends({}, theme.typography.headline, { margin: '0 0 0.35em 0' }),
      'h5': _extends({}, theme.typography.subheading, { margin: '0 0 0.35em 0' }),
      'small': _extends({}, theme.typography.caption)
    }
  };
};

var GlobalStyles = function (_React$Component) {
  _inherits(GlobalStyles, _React$Component);

  function GlobalStyles() {
    _classCallCheck(this, GlobalStyles);

    return _possibleConstructorReturn(this, (GlobalStyles.__proto__ || Object.getPrototypeOf(GlobalStyles)).apply(this, arguments));
  }

  _createClass(GlobalStyles, [{
    key: 'componentDidMount',

    // Double Check if this is in use for server rendering.
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return GlobalStyles;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(globalStyles)(GlobalStyles);