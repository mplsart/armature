'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/flyouts/FlyoutBase.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = require('react-popper');

var _helpers = require('material-ui/utils/helpers');

var _RootRef = require('./RootRef');

var _RootRef2 = _interopRequireDefault(_RootRef);

var _Portal = require('material-ui/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _common = require('material-ui/colors/common');

var _common2 = _interopRequireDefault(_common);

var _withStyles = require('material-ui/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Collapse = require('material-ui/transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _ClickAwayListener = require('material-ui/utils/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // This is a merging of tooltip and menue
/* eslint-disable react/no-multi-comp, no-underscore-dangle */

var styles = exports.styles = function styles(theme) {
  return {
    // Will be gone once we drop React 15.x support.
    root: {
      display: 'inline-block',
      flexDirection: 'inherit' // Makes the wrapper more transparent.
    },
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none',
      '&$open': {
        pointerEvents: 'auto'
      }
    },
    open: {},
    tooltip: {
      border: "1px solid #ccc",
      boxShadow: theme.shadows[8],
      backgroundColor: 'white',
      borderRadius: 2,
      color: 'black',
      fontFamily: theme.typography.fontFamily,
      opacity: 0,
      transform: 'translateY(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn
      }),
      minHeight: 0,
      padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit + 'px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: theme.typography.round(14 / 10) + 'em',
      '&$open': {
        opacity: 1,
        transform: 'translateY(0)',
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeOut
        })
      }
    },
    touch: {
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.round(16 / 14) + 'em'
    },
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: 'right center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementRight: _defineProperty({
      transformOrigin: 'left center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementTop: _defineProperty({
      transform: 'translateY(-10vh)',
      transformOrigin: 'center bottom',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipPlacementBottom: _defineProperty({
      transform: 'translateY(10vh)',
      transformOrigin: 'center top',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props, context) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props, context));

    _this.state = {};
    _this.enterTimer = null;
    _this.leaveTimer = null;
    _this.touchTimer = null;
    _this.closeTimer = null;
    _this.isControlled = null;
    _this.popper = null;
    _this.children = null;
    _this.ignoreNonTouchEvents = false;
    _this.handleResize = (0, _debounce2.default)(function () {
      if (_this.popper) {
        _this.popper._popper.scheduleUpdate();
      }
    }, 166);

    _this.handleEnter = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          enterDelay = _this$props.enterDelay;

      var childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);
      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      if (!_this.isControlled) {
        _this.setState({ open: true });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event, true);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          leaveDelay = _this$props2.leaveDelay;

      var childrenProps = children.props;
      console.log('handleLeave');

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);
      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      if (!_this.isControlled) {
        _this.setState({ open: false });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, false);
      }

      clearTimeout(_this.closeTimer);
      _this.closeTimer = setTimeout(function () {
        _this.ignoreNonTouchEvents = false;
      }, _this.props.theme.transitions.duration.shortest);
    };

    _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          enterTouchDelay = _this$props3.enterTouchDelay;

      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(_this.leaveTimer);
      clearTimeout(_this.closeTimer);
      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleEnter(event);
      }, enterTouchDelay);
    };

    _this.handleTouchEnd = function (event) {
      var _this$props4 = _this.props,
          children = _this$props4.children,
          leaveTouchDelay = _this$props4.leaveTouchDelay;

      var childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.handleClose(event);
      }, leaveTouchDelay);
    };

    _this.isControlled = props.open != null;
    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.open = false;
    }
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _warning2.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      clearTimeout(this.touchTimer);
      clearTimeout(this.closeTimer);
      this.handleResize.cancel();
    } // Corresponds to 10 frames at 60 Hz.

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableFocusListener = _props.disableFocusListener,
          disableHoverListener = _props.disableHoverListener,
          disableTouchListener = _props.disableTouchListener,
          enterDelay = _props.enterDelay,
          enterTouchDelay = _props.enterTouchDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          leaveTouchDelay = _props.leaveTouchDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          placementProp = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === undefined ? {} : _props$PopperProps;

      var PopperClassName = _props$PopperProps.className,
          PopperProps = _objectWithoutProperties(_props$PopperProps, ['className']),
          theme = _props.theme,
          flyoutContent = _props.flyoutContent,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'disableFocusListener', 'disableHoverListener', 'disableTouchListener', 'enterDelay', 'enterTouchDelay', 'id', 'leaveDelay', 'leaveTouchDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'flyoutContent']);

      var placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = { 'aria-describedby': id };

      if (!disableTouchListener) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableHoverListener) {
        childrenProps.onMouseOver = this.handleEnter;
        childrenProps.onMouseLeave = this.handleLeave;
      }

      if (!disableFocusListener) {
        childrenProps.onFocus = this.handleEnter;
        childrenProps.onBlur = this.handleLeave;
      }

      return _react2.default.createElement(
        _reactPopper.Manager,
        _extends({
          tag: _reactDom2.default.createPortal ? false : 'div',
          className: (0, _classnames2.default)(classes.root, className)
        }, other, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        }),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize, __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          }
        }),
        _react2.default.createElement(
          _reactPopper.Target,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            }
          },
          function (_ref) {
            var targetProps = _ref.targetProps;
            return _react2.default.createElement(
              _RootRef2.default,
              {
                rootRef: function rootRef(node) {
                  _this2.children = node;
                  targetProps.ref(_this2.children);
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 326
                }
              },
              _react2.default.cloneElement(children, childrenProps)
            );
          }
        ),
        _react2.default.createElement(
          _Portal2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 336
            }
          },
          _react2.default.createElement(
            _reactPopper.Popper,
            _extends({
              placement: placement,
              eventsEnabled: open,
              className: (0, _classnames2.default)(classes.popper, _defineProperty({}, classes.open, open), PopperClassName),
              ref: function ref(node) {
                _this2.popper = node;
              }
            }, PopperProps, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 337
              }
            }),
            function (_ref2) {
              var popperProps = _ref2.popperProps,
                  restProps = _ref2.restProps;

              var actualPlacement = (popperProps['data-placement'] || placement).split('-')[0];
              return _react2.default.createElement(
                'div',
                _extends({}, popperProps, restProps, {
                  style: _extends({}, popperProps.style, {
                    top: popperProps.style.top || 0,
                    left: popperProps.style.left || 0
                  }, restProps.style),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 350
                  }
                }),
                _react2.default.createElement(
                  'div',
                  {
                    id: id,
                    role: 'tooltip',
                    'aria-hidden': !open,
                    onMouseLeave: _this2.handleLeave,
                    className: (0, _classnames2.default)(classes.tooltip, _defineProperty({}, classes.open, open), _defineProperty({}, classes.touch, _this2.ignoreNonTouchEvents), classes['tooltipPlacement' + (0, _helpers.capitalize)(actualPlacement)]),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 360
                    }
                  },
                  flyoutContent
                )
              );
            }
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  /**
   * Tooltip reference element.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Do not respond to focus events.
   */
  disableFocusListener: _propTypes2.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener: _propTypes2.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: _propTypes2.default.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: _propTypes2.default.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes2.default.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: _propTypes2.default.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: _propTypes2.default.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes2.default.bool,
  /**
   * Tooltip placement
   */
  placement: _propTypes2.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,

  /**
   * FlyoutContent
   */
  flyoutContent: _propTypes2.default.node.isRequired
};

Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);