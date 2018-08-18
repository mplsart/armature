'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/marquee/MarqueeCardBase.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Overline = require('../../../typography/Overline');

var _Overline2 = _interopRequireDefault(_Overline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _image, _primaryTitle;

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
    image: (_image = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: 0,
      display: 'block',
      padding: '52.42% 0 0 0', // 60% v 52.42
      position: 'relative',
      overflow: 'hidden',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      '&.withShadow': {}

    }, _defineProperty(_image, theme.breakpoints.only('xs'), {
      padding: '80% 0 0 0' // Card matches mobile marquee ad size theoretically
    }), _defineProperty(_image, theme.breakpoints.only('md'), {
      padding: '60% 0 0 0' // Card matches mobile marquee ad size theoretically
    }), _image),
    contentContainer: _defineProperty({
      position: 'absolute',
      bottom: 0,
      width: '100%',
      //height:'50%',
      height: '100%'
    }, theme.breakpoints.only('xs'), {
      // Phones in portrait
      //height:'60%',
    }),
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
    //citation: {
    //  color: '#fff'
    //},

    primaryTitle: (_primaryTitle = {}, _defineProperty(_primaryTitle, theme.breakpoints.only('xs'), _extends({}, theme.typography.display1, {
      fontFamily: theme.fontFamily.accent,
      marginTop: '0',
      //fontSize:theme.typography.pxToRem(18),
      //lineHeight: theme.typography.pxToRem(18),
      fontWeight: 400,
      marginBottom: 0,
      color: '#fafafa'
    })), _defineProperty(_primaryTitle, theme.breakpoints.only('sm'), _extends({}, theme.typography.display2, {
      fontFace: theme.fontFamily.accent,
      marginTop: 0,
      fontSize: '2.0rem',
      lineHeight: '2.2rem',
      fontWeight: 400,
      marginBottom: 0,
      color: '#fafafa'
    })), _defineProperty(_primaryTitle, theme.breakpoints.up('md'), _extends({}, theme.typography.display3, {
      fontFamily: theme.fontFamily.accent,
      marginTop: 0,
      lineHeight: '2.5rem',
      fontWeight: 400,
      marginBottom: 0,
      color: '#fafafa'
    })), _primaryTitle),

    overlineText: _defineProperty({}, theme.breakpoints.up('md'), _extends({}, theme.typography.body2, {
      color: '#fafafa'
    })),

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

var MarqueeCardBase = function (_React$Component) {
  _inherits(MarqueeCardBase, _React$Component);

  function MarqueeCardBase() {
    _classCallCheck(this, MarqueeCardBase);

    return _possibleConstructorReturn(this, (MarqueeCardBase.__proto__ || Object.getPrototypeOf(MarqueeCardBase)).apply(this, arguments));
  }

  _createClass(MarqueeCardBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          byLineIcon = _props.byLineIcon,
          byLineText = _props.byLineText,
          title = _props.title,
          overlineText = _props.overlineText,
          linkClassProps = _props.linkClassProps,
          imageResource = _props.imageResource;


      var image_url = void 0; // = 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQ2NzAwMDE/card_large.png';

      if (imageResource && imageResource.versions) {
        if (imageResource.versions.CARD_LARGE) {
          image_url = imageResource.versions.CARD_LARGE.url;
        } else if (imageResource.versions.CARD_SMALL) {
          image_url = imageResource.versions.CARD_SMALL.url;
        }
      } //  else ??

      return _react2.default.createElement(
        'div',
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.byline), __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            }
          },
          _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', byLineIcon, classes.byLineIcon), __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            }
          }),
          byLineText
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('imageWrapper', classes.imageWrapper), __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          },
          _react2.default.createElement('div', {
            className: (0, _classnames2.default)('image', classes.image, 'withShadow'),
            style: { backgroundImage: 'url(' + image_url + ')' },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          })
        ),
        _react2.default.createElement(
          this.props.linkClass,
          _extends({
            title: title
          }, linkClassProps, {
            className: classes.contentContainer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          }),
          _react2.default.createElement(
            'div',
            { className: classes.contentContainerContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              }
            },
            _react2.default.createElement(
              _Overline2.default,
              { className: classes.overlineText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                }
              },
              overlineText
            ),
            _react2.default.createElement(
              _Typography2.default,
              { className: (0, _classnames2.default)('primaryTitle', classes.primaryTitle), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 181
                }
              },
              title
            )
          )
        )
      );
    }
  }]);

  return MarqueeCardBase;
}(_react2.default.Component);

MarqueeCardBase.propTypes = {
  classes: _propTypes2.default.object,
  resource: _propTypes2.default.object,
  byLineIcon: _propTypes2.default.string,
  byLineText: _propTypes2.default.node,
  title: _propTypes2.default.string,
  overlineText: _propTypes2.default.node,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  imageResource: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(MarqueeCardBase);