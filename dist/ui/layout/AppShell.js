'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppMenu = require('./AppMenu');

var _AppMenu2 = _interopRequireDefault(_AppMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppShell = function (_React$Component) {
  _inherits(AppShell, _React$Component);

  function AppShell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppShell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppShell.__proto__ || Object.getPrototypeOf(AppShell)).call.apply(_ref, [this].concat(args))), _this), _this.state = { menuActive: false }, _this.handleSiteMenuToggle = function () {
      _this.setState({ menuActive: !_this.state.menuActive });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // TODO: Eventually, drive this off the redux store

  _createClass(AppShell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          appBarComponent = _props.appBarComponent,
          menuContentComponent = _props.menuContentComponent;


      var appBar = void 0,
          mainMenu = void 0;

      if (appBarComponent) {
        appBar = _react2.default.createElement(this.props.appBarComponent, { menuActive: this.state.menuActive, handleMenuToggle: this.handleSiteMenuToggle.bind(this) });
      }

      if (menuContentComponent) {
        mainMenu = _react2.default.createElement(_AppMenu2.default, { contentComponent: menuContentComponent, menuActive: this.state.menuActive, handleMenuToggle: this.handleSiteMenuToggle.bind(this) });
      }

      return _react2.default.createElement(
        'div',
        null,
        appBar,
        mainMenu,
        children
      );
    }
  }]);

  return AppShell;
}(_react2.default.Component);

exports.default = AppShell;