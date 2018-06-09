'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/ads/MegaBannerAd.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _styles = require('@material-ui/core/styles');

var _withWidth = require('@material-ui/core/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _card, _a;

  return {
    adContainer: {
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },

    card: (_card = {
      'position': 'relative',
      'background-color': '#fff',
      'transition': 'box-shadow .25s',
      'border-radius': '2px',
      'marginTop': theme.gutterSpacing / 2,
      'marginBottom': theme.gutterSpacing / 2

    }, _defineProperty(_card, 'transition', 'box-shadow .25s'), _defineProperty(_card, '&:hover', {
      //'box-shadow':'0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
      'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
    }), _card),

    cardContent: {
      'padding': '16px',
      'background-color': '#eee'
    },

    cardImage: {
      '& a': (_a = {
        'display': 'block',
        'position': 'relative',
        'height': '0',
        'overflow': 'hidden',
        'background-color': '#eee',
        'width': '100%',

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-1220px_wide.jpg")'
      }, _defineProperty(_a, 'height', 0), _defineProperty(_a, 'display', 'block'), _defineProperty(_a, 'padding', '60% 0 0 0'), _defineProperty(_a, 'position', 'relative'), _defineProperty(_a, '& img', {
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'margin': 'auto',
        width: '100%'
      }), _a)
    },

    sponsorText: _extends({}, theme.typography.body1, {
      'position': 'absolute',
      'top': 0,
      'color': '#ffffff',
      'font-size': '12px',
      'line-height': '1.5em',
      'padding-left': '16px',
      paddingTop: '8px',
      'opacity': '0.8'
    })
  };
};

var MegaBannerAd = function (_React$Component) {
  _inherits(MegaBannerAd, _React$Component);

  function MegaBannerAd() {
    _classCallCheck(this, MegaBannerAd);

    return _possibleConstructorReturn(this, (MegaBannerAd.__proto__ || Object.getPrototypeOf(MegaBannerAd)).apply(this, arguments));
  }

  _createClass(MegaBannerAd, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          width = _props.width,
          adspotId = _props.adspotId,
          resource = _props.resource;


      console.log(adspotId);
      console.log(resource);

      // Determine Image to use based on device/breakpoints
      var imageUrl = void 0,
          h = void 0,
          w = void 0;

      h = 138;
      w = 1220;
      imageUrl = 'https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-1220px_wide.jpg';

      if (width == 'xs') {
        h = 100;
        w = 304;
        imageUrl = 'https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-304px_wide.jpg';
      }

      var title = 'yolo';
      var scale_factor = Math.floor(100 * h / w * 100.00) / 100.00;
      var adImageStyles = {
        paddingTop: scale_factor + '%',
        backgroundImage: 'url("' + imageUrl + '")'
      };

      var linkClassProps = { href: 'http://google.com', target: '_new' };

      var linkNode = _react2.default.createElement('a', _extends({
        title: title,
        style: adImageStyles
      }, linkClassProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }));

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.adContainer), __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.card), __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'card-header', __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              }
            },
            _react2.default.createElement(
              'div',
              { className: classes.cardImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              },
              linkNode
            ),
            _react2.default.createElement(
              'div',
              { className: classes.sponsorText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124
                }
              },
              resource.advert_type_label || 'advertisement',
              ' (',
              width,
              ')'
            )
          )
        )
      );
    }
  }]);

  return MegaBannerAd;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(MegaBannerAd);


MegaBannerAd.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  width: _propTypes2.default.string.isRequired,
  adspotId: _propTypes2.default.string.isRequired,
  resource: _propTypes2.default.object
};