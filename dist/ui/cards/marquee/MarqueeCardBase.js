'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/marquee/MarqueeCardBase.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function calc_aspect_ratio(h, w) {
  var ration = .75; // 600/1000

  return { height: h, width: w };
}

var styles = function styles(theme) {
  console.log(theme);

  return {
    root: { position: 'relative' },
    image: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: 'url(https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTA2MDAwMDE/card_large.png)',
      width: '100%',
      height: 0,
      display: 'block',
      padding: '60% 0 0 0',
      position: 'relative',
      overflow: 'hidden',

      '&.withShadow': {}
    },
    contentContainer: {
      position: 'absolute',
      bottom: 0,
      background: 'linear-gradient(transparent, black)',
      width: '100%',
      height: '60%'
    },
    contentContainerContent: {
      position: 'absolute',
      bottom: 0,
      color: '#fff',
      padding: '32px'
    },
    citation: {
      color: '#fff'
    },

    primaryTitle: {
      fontFamily: theme.fontFamily.accent,
      color: '#fff'
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
      var classes = this.props.classes;

      var _calc_aspect_ratio = calc_aspect_ratio(900, 472),
          height = _calc_aspect_ratio.height,
          width = _calc_aspect_ratio.width;

      return _react2.default.createElement(
        'div',
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        _react2.default.createElement(
          'a',
          { href: '#', className: (0, _classnames2.default)(classes.image, 'withShadow'), __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          '\xA0'
        ),
        _react2.default.createElement(
          'div',
          { className: classes.contentContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          _react2.default.createElement(
            'div',
            { className: classes.contentContainerContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            _react2.default.createElement(
              _Typography2.default,
              { className: classes.citation, variant: 'caption', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              'Published March 5th by Sheila Regan'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { className: classes.primaryTitle, variant: 'display1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
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