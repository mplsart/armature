'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/layout/AppMenu.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Drawer = require('@material-ui/core/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Maybe this should be main menu container?

/* eslint-disable flowtype/require-valid-file-annotation */

// TODO: Run this off of the theme
var drawerWidth = 300;

// TODO: Eval what of these is even being used...
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
    drawerInner: {
      // Make the items inside not wrap when transitioning:
      width: drawerWidth,
      padding: theme.spacing.unit * 2,
      paddingTop: 0
    },
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

var AppMenu = function AppMenu(_ref) {
  var classes = _ref.classes,
      contentComponent = _ref.contentComponent,
      handleMenuToggle = _ref.handleMenuToggle,
      menuActive = _ref.menuActive;

  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    },
    _react2.default.createElement(
      'div',
      { className: classes.appFrame, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      },
      _react2.default.createElement(
        _Drawer2.default,
        {
          ModalProps: {
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: { className: classes.modalBackdrop }
          },
          classes: {
            paper: (0, _classnames2.default)(classes.drawerPaper),
            modal: (0, _classnames2.default)(classes.modal)
          },
          open: menuActive,
          onClose: handleMenuToggle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        },
        _react2.default.createElement(
          'div',
          { className: classes.drawerInner, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          contentComponent
        )
      )
    )
  );
};

AppMenu.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  contentComponent: _propTypes2.default.node,
  menuActive: _propTypes2.default.bool,
  handleMenuToggle: _propTypes2.default.func.isRequired,
  width: _propTypes2.default.string
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(AppMenu);