'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _CssBaseline = require('material-ui/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _GlobalStyles = require('./GlobalStyles');

var _GlobalStyles2 = _interopRequireDefault(_GlobalStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withRoot(Component) {
  var WithRoot = function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props, context) {
      _classCallCheck(this, WithRoot);

      var _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props, context));

      _this.pageContext = null;


      _this.pageContext = _this.props.pageContext || (0, _context2.default)();
      return _this;
    }

    _createClass(WithRoot, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        console.log('Attempt to remove injected styles...');
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
          console.log('yeah, remove??');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return _react2.default.createElement(
          _styles.MuiThemeProvider,
          {
            theme: this.pageContext.theme,
            sheetsManager: this.pageContext.sheetsManager
          },
          _react2.default.createElement(_CssBaseline2.default, null),
          _react2.default.createElement(_GlobalStyles2.default, null),
          _react2.default.createElement(Component, this.props)
        );
      }
    }]);

    return WithRoot;
  }(_react2.default.Component);

  WithRoot.propTypes = {
    pageContext: _propTypes2.default.object
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

exports.default = withRoot;