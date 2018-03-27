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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Maybe this should be main menu container?

/* eslint-disable flowtype/require-valid-file-annotation */

var drawerWidth = 300;

var styles = function styles(theme) {
  return {
    drawerPaper: {
      backgroundColor: '#000',
      position: 'relative',
      height: '100%',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      flex: 'none'
    },
    drawerPaperClose: {
      width: 60,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    drawerInner: {
      // Make the items inside not wrap when transitioning:
      width: drawerWidth
    },
    content: _defineProperty({
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 24,
      height: 'calc(100% - 56px)',
      marginTop: theme.appBarHeight.default
    }, theme.breakpoints.up('sm'), {
      height: 'calc(100% - 64px)',
      marginTop: theme.appBarHeight.sm
    }),
    modal: _defineProperty({
      top: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      top: theme.appBarHeight.default
    }),
    modalBackdrop: _defineProperty({
      top: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      top: theme.appBarHeight.default
    })
  };
};

var AppMenu = function (_React$Component) {
  _inherits(AppMenu, _React$Component);

  function AppMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppMenu.__proto__ || Object.getPrototypeOf(AppMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: _this.props.menuActive
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          contentComponent = _props.contentComponent,
          handleMenuToggle = _props.handleMenuToggle,
          menuActive = _props.menuActive;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          'div',
          { className: classes.appFrame },
          _react2.default.createElement(
            _Drawer2.default,
            {
              ModalProps: {
                keepMounted: true, // Better open performance on mobile.
                BackdropProps: { className: classes.modalBackdrop }
              },
              classes: {
                paper: (0, _classnames2.default)(classes.drawerPaper, !menuActive && classes.drawerPaperClose),
                modal: (0, _classnames2.default)(classes.modal)
              },
              open: menuActive,
              onClose: handleMenuToggle
            },
            _react2.default.createElement(
              'div',
              { className: classes.drawerInner },
              contentComponent
            )
          )
        )
      );
    }
  }]);

  return AppMenu;
}(_react2.default.Component);

AppMenu.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  contentComponent: _propTypes2.default.node,
  menuActive: _propTypes2.default.bool,
  handleMenuToggle: _propTypes2.default.func.isRequired,
  width: _propTypes2.default.string
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(AppMenu);