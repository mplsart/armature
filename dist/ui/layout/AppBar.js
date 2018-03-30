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

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _AppBarMenuIcon = require('./AppBarMenuIcon');

var _AppBarMenuIcon2 = _interopRequireDefault(_AppBarMenuIcon);

var _grid = require('armature/dist/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    fixedRoot: _defineProperty({ // Placeholder that pushesdown the content
      width: '100%',
      paddingTop: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      paddingTop: theme.appBarHeight.default
    }),

    appBar: _defineProperty({
      backgroundColor: '#222', // TODO: Make theme variable?
      height: theme.appBarHeight.sm, // TODO: Make theme variable? appBarHeight
      minHeight: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      height: theme.appBarHeight.default,
      minHeight: theme.appBarHeight.default
    }),

    toolBar: _defineProperty({
      minHeight: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      minHeight: theme.appBarHeight.default
    }),

    title: _defineProperty({
      flex: 1,
      fontSize: '1.75rem',
      lineHeight: '1.75rem',
      fontWeight: 100,
      textAlign: 'left',
      color: '#dfdfdf',
      marginTop: '2px' }, theme.breakpoints.down('sm'), {
      textAlign: 'center'
    }),
    loader: {
      height: '2px'
      //display:'none'
    }
  };
};

var AppBar = function (_React$Component) {
  _inherits(AppBar, _React$Component);

  function AppBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      open: false,
      menuActive: _this.props.menuActive
    }, _this.handleClick = function (e) {
      _this.props.handleMenuToggle(e);
    }, _this.handleRequestClose = function () {
      _this.props.handleMenuToggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // This may not be used?


  _createClass(AppBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fluid = _props.fluid,
          menuActive = _props.menuActive,
          titleComponents = _props.titleComponents,
          rightComponents = _props.rightComponents;


      return _react2.default.createElement(
        'div',
        { className: classes.fixedRoot },
        _react2.default.createElement(
          _AppBar2.default,
          { position: 'fixed', className: classes.appBar },
          _react2.default.createElement(
            _grid.Grid,
            { fluid: fluid },
            _react2.default.createElement(
              _Toolbar2.default,
              { className: classes.toolBar },
              _react2.default.createElement(_AppBarMenuIcon2.default, { active: menuActive, handleMenuToggle: this.handleClick.bind(this) }),
              _react2.default.createElement(
                _Typography2.default,
                { type: 'title', color: 'inherit', className: classes.title },
                titleComponents
              ),
              rightComponents
            )
          )
        )
      );
    }
  }]);

  return AppBar;
}(_react2.default.Component);

AppBar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  menuActive: _propTypes2.default.bool,
  handleMenuToggle: _propTypes2.default.func,
  rightComponents: _propTypes2.default.node,
  titleComponents: _propTypes2.default.node,
  fluid: _propTypes2.default.bool
};

exports.default = (0, _styles.withStyles)(styles)(AppBar);