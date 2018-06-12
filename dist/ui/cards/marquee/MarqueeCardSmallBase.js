'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/marquee/MarqueeCardSmallBase.js';

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
    image: _defineProperty({
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: 0,
      display: 'block',
      padding: '52.42% 0 0 0', // 60 v 52.42
      position: 'relative',
      overflow: 'hidden',
      '&.withShadow': {},

      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease'

    }, theme.breakpoints.only('xs'), {
      //padding:'30% 0 0 0',
    }),

    imageLink: {
      display: 'block',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },

    contentContainer: _defineProperty({
      width: '100%'
    }, theme.breakpoints.only('xs'), {}),
    contentContainerContent: _defineProperty({
      bottom: 0,
      padding: '0px'
    }, theme.breakpoints.only('xs'), {
      // Phones in portrait
      padding: 8
    }),

    primaryTitle: _extends({}, theme.typography.display2, {
      fontFamily: theme.fontFamily.accent,
      marginTop: '0.35em',
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(23), //1.46429em
      fontWeight: 400,
      marginBottom: 0
    }),

    byline: _defineProperty({
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1000,
      backgroundColor: '#fafafa',
      padding: '8px 16px 8px 8px',

      fontSize: '14px'
    }, 'padding', '0px 8px 0px 0px'),

    byLineIcon: {
      marginRight: '8px'
    },

    overline: {
      paddingTop: 8,
      color: '#000'
    }
  };
};

var MarqueeCardSmallBase = function (_React$Component) {
  _inherits(MarqueeCardSmallBase, _React$Component);

  function MarqueeCardSmallBase() {
    _classCallCheck(this, MarqueeCardSmallBase);

    return _possibleConstructorReturn(this, (MarqueeCardSmallBase.__proto__ || Object.getPrototypeOf(MarqueeCardSmallBase)).apply(this, arguments));
  }

  _createClass(MarqueeCardSmallBase, [{
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
            lineNumber: 124
          }
        },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.byline), __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          },
          _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', byLineIcon, classes.byLineIcon), __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            }
          }),
          byLineText
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('imageWrapper', classes.imageWrapper), __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('image', classes.image, 'withShadow'),
              style: { backgroundImage: 'url(' + image_url + ')' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            },
            _react2.default.createElement(
              this.props.linkClass,
              _extends({
                title: title
              }, linkClassProps, {
                className: classes.imageLink, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                }
              }),
              '\xA0'
            )
          )
        ),
        _react2.default.createElement(
          this.props.linkClass,
          _extends({
            title: title
          }, linkClassProps, {
            className: classes.contentContainer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          }),
          _react2.default.createElement(
            'div',
            { className: classes.contentContainerContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            },
            _react2.default.createElement(
              _Overline2.default,
              { className: (0, _classnames2.default)('overline', classes.overline), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                }
              },
              overlineText
            ),
            _react2.default.createElement(
              _Typography2.default,
              { className: (0, _classnames2.default)('primaryTitle', classes.primaryTitle), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                }
              },
              title
            )
          )
        )
      );
    }
  }]);

  return MarqueeCardSmallBase;
}(_react2.default.Component);

MarqueeCardSmallBase.propTypes = {
  classes: _propTypes2.default.object,
  resource: _propTypes2.default.object,
  byLineIcon: _propTypes2.default.string,
  byLineText: _propTypes2.default.node,
  title: _propTypes2.default.string,
  overlineText: _propTypes2.default.node,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.any, //PropTypes.func,
  imageResource: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(MarqueeCardSmallBase);