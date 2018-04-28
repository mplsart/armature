'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/layout/AppBarMenuIcon.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _menuButtonJazzy;

  return {
    menuButtonJazzy: (_menuButtonJazzy = {
      transition: 'background-color 0.3s',
      marginLeft: -2 * theme.spacing.unit,
      marginRight: -2 * theme.spacing.unit,
      padding: 15,
      borderRadius: 0,
      height: theme.appBarHeight.sm

    }, _defineProperty(_menuButtonJazzy, theme.breakpoints.up('sm'), {
      marginLeft: -3 * theme.spacing.unit,
      marginRight: 2 * theme.spacing.unit,
      height: theme.appBarHeight.default,
      width: 60
    }), _defineProperty(_menuButtonJazzy, '&:hover', {
      backgroundColor: '#333'
    }), _menuButtonJazzy),
    menuButtonJazzyLink: {
      '&:hover': {
        textDecoration: 'none'
      }
    },
    menuButtonJazzyPatty: { //Span
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: 1,
      height: 3,
      width: 25,
      backgroundColor: 'white',
      content: '"."',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 500ms ease-in-out',
      '&.patty1': { top: 12 },
      '&.patty3': { top: -12 },
      '&.patty2.active': { backgroundColor: 'transparent' },
      '&.patty1.active, &.patty3.active': { backgroundColor: theme.palette.primary[500] },
      '&.patty1.active': { top: 4, transform: 'rotate(45deg)' },
      '&.patty3.active': { top: -2, transform: 'rotate(-45deg)' }
    }
  };
};

function HamburgerMenu(_ref) {
  var classes = _ref.classes,
      active = _ref.active,
      handleMenuToggle = _ref.handleMenuToggle;

  return _react2.default.createElement(
    _IconButton2.default,
    { onClick: handleMenuToggle, className: (0, _classnames2.default)(classes.menuButtonJazzy, active && 'active'), color: 'default', 'aria-label': 'Menu', __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    },
    _react2.default.createElement(
      'a',
      { className: classes.menuButtonJazzyLink, id: 'side_nav_toggle', title: 'Show Menu', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      },
      _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.menuButtonJazzyPatty, 'patty1', active && 'active'), __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        '\xA0'
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.menuButtonJazzyPatty, 'patty2', active && 'active'), __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        '\xA0'
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.menuButtonJazzyPatty, 'patty3', active && 'active'), __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        '\xA0'
      )
    )
  );
}
HamburgerMenu.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  active: _propTypes2.default.bool,
  handleMenuToggle: _propTypes2.default.func.isRequired
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(HamburgerMenu);