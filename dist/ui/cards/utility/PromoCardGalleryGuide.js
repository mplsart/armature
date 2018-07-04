'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/cards/utility/PromoCardGalleryGuide.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Style Overrides for the button
var styles2 = function styles2(theme) {
  return {
    button: {
      //margin:  theme.spacing.unit,
      //marginLeft: 0,
      //padding:'0 2.5rem',
      //fontWeight:'normal',
      //minHeight:'26px',
      fontSize: '1rem'
    },
    input: {
      //display: 'none',
    }
  };
};

function ListItemAction(props) {
  var classes = props.classes,
      children = props.children,
      linkClass = props.linkClass,
      linkClassProps = props.linkClassProps,
      rest = _objectWithoutProperties(props, ['classes', 'children', 'linkClass', 'linkClassProps']);

  return _react2.default.createElement(
    _Button2.default,
    _extends({ variant: 'raised', color: 'primary', className: classes.button }, rest, { component: linkClass }, linkClassProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }),
    children
  );
}

ListItemAction.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};

var ListItemActionButton = (0, _styles.withStyles)(styles2)(ListItemAction);

var styles = function styles(theme) {
  return {
    root: {
      border: '1px solid black',
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '32px',
      width: '100%',
      height: '100%',

      '&:before': {
        content: '"" ""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%'
      }
    },

    contentContainer: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },

    icon: _defineProperty({
      fontSize: '65px',
      lineHeight: '65px'
    }, theme.breakpoints.only('md'), {
      fontSize: '45px',
      lineHeight: '45px'
    }),
    text: _defineProperty({
      fontSize: '30px',
      lineHeight: '40px'
    }, theme.breakpoints.only('md'), {
      fontSize: '20px',
      lineHeight: '25px'
    })
  };
};

function PromoCardGalleryGuide(_ref) {
  var classes = _ref.classes,
      linkClass = _ref.linkClass,
      linkClassProps = _ref.linkClassProps;

  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    },
    _react2.default.createElement(
      'div',
      { className: classes.contentContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      },
      _react2.default.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        },
        _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', 'fa-map-marker', classes.icon), __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        })
      ),
      _react2.default.createElement(
        'p',
        { className: classes.text, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        },
        'Find all ',
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }),
        'the local art'
      ),
      _react2.default.createElement(
        ListItemActionButton,
        { linkClass: linkClass, linkClassProps: linkClassProps, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        },
        'Gallery Guide'
      )
    )
  );
}

PromoCardGalleryGuide.propTypes = {
  classes: _propTypes2.default.object,
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

exports.default = (0, _styles.withStyles)(styles)(PromoCardGalleryGuide);