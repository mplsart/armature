'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/marquee/MarqueeCardBase.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Overline = require('../../../../src/typography/Overline');

var _Overline2 = _interopRequireDefault(_Overline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import ContentTitle from '../../../../src/typography/ContentTitle';

function calc_aspect_ratio(h, w) {
  var ration = .75; // 600/1000
  return { height: h, width: w };
}

var styles = function styles(theme) {
  var _primaryTitle;

  console.log(theme);

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
      backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQ2NzAwMDE/card_large.png)',
      width: '100%',
      height: 0,
      display: 'block',
      padding: '60% 0 0 0',
      position: 'relative',
      overflow: 'hidden',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      '&.withShadow': {}
    },
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
      background: 'linear-gradient(transparent, black)'

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
      fontSize: '1rem',
      lineHeight: '1.2rem',
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
    })
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
      var classes = this.props.classes;

      var _calc_aspect_ratio = calc_aspect_ratio(900, 472),
          height = _calc_aspect_ratio.height,
          width = _calc_aspect_ratio.width;

      return _react2.default.createElement(
        'div',
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.byline), __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          },
          _react2.default.createElement('i', { className: 'fa fa-newspaper-o', style: { marginRight: '8px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            }
          }),
          'New Article'
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('imageWrapper', classes.imageWrapper), __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            }
          },
          _react2.default.createElement('div', { className: (0, _classnames2.default)('image', classes.image, 'withShadow'), __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            }
          })
        ),
        _react2.default.createElement(
          'a',
          { href: 'google.com', className: classes.contentContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            }
          },
          _react2.default.createElement(
            'div',
            { className: classes.contentContainerContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              }
            },
            _react2.default.createElement(
              _Overline2.default,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
                }
              },
              'Published March 5th, 2018 by Sheila Regan'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { className: (0, _classnames2.default)('primaryTitle', classes.primaryTitle), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                }
              },
              'Between Boredom and the Body: Emmett Ramstad\'s Laying in Wait'
            )
          )
        )
      );
    }
  }]);

  return MarqueeCardBase;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(MarqueeCardBase);