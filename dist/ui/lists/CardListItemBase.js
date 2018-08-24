'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/lists/CardListItemBase.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _CardMedia = require('@material-ui/core/CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Overline = require('../../typography/Overline');

var _Overline2 = _interopRequireDefault(_Overline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: { width: '100%', padding: '12px !important', overflowX: 'hidden' },
    image: {
      width: '5rem',
      height: '5rem',
      marginRight: '0px'
    },

    text: {
      '& h3': {
        fontSize: theme.typography.pxToRem(18),
        lineHeight: theme.typography.pxToRem(18),
        marginBottom: '4px'
      },
      '&.highlightPrimary h3': {
        color: theme.palette.primary['500']
      },
      '& aside': {
        lineHeight: theme.typography.pxToRem(18)
      }
    }
  };
};

function CardListItemBase(props) {
  var classes = props.classes,
      button = props.button,
      imageFloat = props.imageFloat,
      divider = props.divider,
      highlightPrimary = props.highlightPrimary,
      imageUrl = props.imageUrl,
      imageAltText = props.imageAltText,
      primaryText = props.primaryText,
      secondaryText = props.secondaryText,
      overlineText = props.overlineText,
      underlineText = props.underlineText,
      linkClassProps = props.linkClassProps,
      linkClass = props.linkClass,
      rest = _objectWithoutProperties(props, ['classes', 'button', 'imageFloat', 'divider', 'highlightPrimary', 'imageUrl', 'imageAltText', 'primaryText', 'secondaryText', 'overlineText', 'underlineText', 'linkClassProps', 'linkClass']);

  var imageNode = void 0;
  var underlineNode = void 0,
      overlineNode = void 0;

  // Image
  if (imageUrl) {
    imageNode = _react2.default.createElement(
      _ListItemIcon2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      _react2.default.createElement(_CardMedia2.default, {
        className: (0, _classnames2.default)(classes.image),
        image: imageUrl,
        title: imageAltText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })
    );
  }

  // Textual Content
  if (overlineText) {
    overlineNode = _react2.default.createElement(
      _Overline2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      },
      overlineText
    );
  }

  if (underlineText) {
    underlineNode = _react2.default.createElement(
      _Overline2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      },
      underlineText
    );
  }

  primaryText = _react2.default.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    },
    overlineNode,
    _react2.default.createElement(
      _Typography2.default,
      { variant: 'subheading', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      },
      primaryText
    ),
    underlineNode
  );
  secondaryText = _react2.default.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    },
    _react2.default.createElement(
      _Typography2.default,
      { variant: 'body2', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      },
      secondaryText
    )
  );

  // Primary Link (you can also pass onClick)
  if (linkClass) {
    var derp = { linkClass: linkClass };
    rest.component = function (props) {
      return _react2.default.createElement(derp.linkClass, _extends({}, linkClassProps, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }));
    };
  }

  return _react2.default.createElement(
    _ListItem2.default,
    _extends({
      button: button,
      className: classes.root,
      divider: divider
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }),
    imageFloat == 'left' && imageNode,
    _react2.default.createElement(_ListItemText2.default, {
      classes: { root: (0, _classnames2.default)(classes.text, highlightPrimary ? 'highlightPrimary' : '') },
      primary: primaryText,
      secondary: secondaryText,
      disableTypography: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }),
    imageFloat == 'right' && imageNode
  );
}

CardListItemBase.propTypes = {
  classes: _propTypes2.default.object,
  button: _propTypes2.default.bool,
  imageFloat: _propTypes2.default.string,
  divider: _propTypes2.default.bool,
  highlightPrimary: _propTypes2.default.bool,
  imageUrl: _propTypes2.default.string,
  imageAltText: _propTypes2.default.string,
  primaryText: _propTypes2.default.string,
  secondaryText: _propTypes2.default.string,
  overlineText: _propTypes2.default.string,
  underlineText: _propTypes2.default.string,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

CardListItemBase.defaultProps = { imageFloat: 'left' };

exports.default = (0, _styles.withStyles)(styles)(CardListItemBase);