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
    }
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
        lineNumber: 62
      }
    },
    _react2.default.createElement(
      'div',
      { className: classes.contentContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      },
      _react2.default.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        },
        _react2.default.createElement('i', { style: { fontSize: '65px', lineHeight: '65px' }, className: (0, _classnames2.default)('fa', 'fa-map-marker'), __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })
      ),
      _react2.default.createElement(
        'p',
        { style: { fontSize: '30px', lineHeight: '40px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        'Find all ',
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }),
        'the local art'
      ),
      _react2.default.createElement(
        ListItemActionButton,
        { linkClass: linkClass, linkClassProps: linkClassProps, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
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
  linkClass: _propTypes2.default.func
};

exports.default = (0, _styles.withStyles)(styles)(PromoCardGalleryGuide);