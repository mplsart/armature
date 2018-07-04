'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/utility/PromoCardVenue.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _primaryTitle;

  return {
    root: {
      position: 'relative',

      '&:hover': {
        '& a': {
          textDecoration: 'none'
        },
        '& .image': {
          transform: 'scale(1.1)'
        },
        '& .primaryTitle': {
          color: theme.palette.primary[500]
        }
      }
    },

    imageWrapper: {
      overflow: 'hidden'
    },
    image: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: 0,
      display: 'block',
      padding: '60% 0 0 0', // 60% v 52.42
      position: 'relative',
      overflow: 'hidden',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      '&.withShadow': {}

      /*
      [theme.breakpoints.only('xs')]: {
        padding:'80% 0 0 0' // Card matches mobile marquee ad size theoretically
      },
       [theme.breakpoints.only('md')]: {
        padding:'60% 0 0 0' // Card matches mobile marquee ad size theoretically
      }
      */
    },
    contentContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '100%'
    },
    contentContainerContent: _defineProperty({
      position: 'absolute',
      bottom: 0,
      color: '#fff',
      padding: '32px',
      background: 'linear-gradient(transparent, black)',
      width: '100%'

    }, theme.breakpoints.only('xs'), {
      // Phones in portrait
      padding: '16px'
    }),

    primaryTitle: (_primaryTitle = {}, _defineProperty(_primaryTitle, theme.breakpoints.only('xs'), _extends({}, theme.typography.display1, {
      fontFamily: theme.fontFamily.accent,
      marginTop: '0',
      //fontSize:theme.typography.pxToRem(18),
      //lineHeight: theme.typography.pxToRem(18),
      fontWeight: 100,
      marginBottom: 0,
      color: '#fafafa'
    })), _defineProperty(_primaryTitle, theme.breakpoints.only('sm'), _extends({}, theme.typography.display2, {
      fontFace: theme.fontFamily.accent,
      marginTop: 0,
      fontSize: '2.0rem',
      lineHeight: '2.2rem',
      fontWeight: 100,
      marginBottom: 0,
      color: '#fafafa'
    })), _defineProperty(_primaryTitle, theme.breakpoints.up('md'), _extends({}, theme.typography.display3, {
      fontFamily: theme.fontFamily.accent,
      marginTop: 0,
      lineHeight: '2.5rem',
      fontWeight: 100,
      marginBottom: 0,
      color: '#fafafa'
    })), _defineProperty(_primaryTitle, 'textAlign', 'center'), _primaryTitle),

    byline: _defineProperty({
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1000,
      backgroundColor: '#fafafa',
      padding: '8px 16px 8px 8px'

    }, theme.breakpoints.only('xs'), {
      // Phones in portrait
      fontSize: '14px',
      padding: '0px 8px 0px 0px'
    }),

    byLineIcon: {
      marginRight: '8px'
    }
  };
};

function PromoCardVenue(_ref) {
  var classes = _ref.classes,
      resource = _ref.resource,
      linkClassProps = _ref.linkClassProps,
      props = _objectWithoutProperties(_ref, ['classes', 'resource', 'linkClassProps']);

  if (!resource) {
    return null;
  }

  //let image_url = 'https://storage.googleapis.com/cdn.mplsart.com/mocks/homepagev3/localfav_gamut.jpg';

  var image_url = resource.promo_image_resource.versions.CARD_LARGE.url; //'https://storage.googleapis.com/cdn.mplsart.com/mocks/homepagev3/900x540.jpg';

  var title = resource.name;

  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(classes.byline), __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      },
      _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', 'fa-map-marker', classes.byLineIcon), __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }),
      'Local Favorite'
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('imageWrapper', classes.imageWrapper), __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      },
      _react2.default.createElement('div', {
        className: (0, _classnames2.default)('image', classes.image, 'withShadow'),
        style: { backgroundImage: 'url(' + image_url + ')' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      })
    ),
    _react2.default.createElement(
      props.linkClass,
      _extends({
        title: title
      }, linkClassProps, {
        className: classes.contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }),
      _react2.default.createElement(
        'div',
        { className: classes.contentContainerContent, __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        },
        _react2.default.createElement(
          _Typography2.default,
          { className: (0, _classnames2.default)('primaryTitle', classes.primaryTitle), __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            }
          },
          title
        )
      )
    )
  );
}

PromoCardVenue.propTypes = {
  classes: _propTypes2.default.object,
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

exports.default = (0, _styles.withStyles)(styles)(PromoCardVenue);