'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/legacy/LegacyAdvertCard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _card;

  return {
    root: {
      border: '1px solid red',
      fontSize: '48px'
    },

    card: (_card = {
      // Old school card style
      'position': 'relative',
      'margin': '0.5rem 0 1rem 0',
      'background-color': '#fff',
      'transition': 'box-shadow .25s',
      'border-radius': '2px'
    }, _defineProperty(_card, 'margin', theme.spacing.unit * 2), _defineProperty(_card, 'transition', 'box-shadow .25s'), _defineProperty(_card, 'box-shadow', '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'), _defineProperty(_card, '&:hover', {
      'transition': 'box-shadow .25s',
      'box-shadow': '0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
    }), _card),
    cardContainer: {},
    cardContent: {
      'padding': '16px',
      'background-color': '#eee'
    },

    cardTitle: _extends({}, theme.typography.body1, {
      'font-size': '18px',
      'font-weight': 400,
      'line-height': '1.25em',
      'padding-bottom': '.5em',

      '& a:hover': {
        'text-decoration': 'none'
      }
    }),
    cardDetail: _extends({}, theme.typography.body1, {
      'font-size': '14px',
      'line-height': '1.45em',
      'color': '#000',
      'font-weight': 100
    }),
    cardDetailLarge: {
      'font-size': '16px'
    },

    cardImage: {
      '& a': {
        //.fixed-size a {
        /* Helper class for sizing image container in masonry layouts */

        'display': 'block',
        'position': 'relative',
        'height': '0',
        'overflow': 'hidden',
        //'padding': '52.42% 0 0 0', /* Note padding-top is overridden via JS */
        'background-color': '#eee',
        'width': '100%',

        // The Image Itself?
        '& img': {
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'margin': 'auto',
          width: '100%'
        }
      }
    },
    sponsorText: _extends({}, theme.typography.body1, {
      'position': 'absolute',
      'top': 0,
      'color': '#ffffff',
      'font-size': '14px',
      'line-height': '1.5em',
      'padding-left': '10px',
      'opacity': '0.8'
    })
  };
};

var LegacyCardBase = function (_React$Component) {
  _inherits(LegacyCardBase, _React$Component);

  function LegacyCardBase() {
    _classCallCheck(this, LegacyCardBase);

    return _possibleConstructorReturn(this, (LegacyCardBase.__proto__ || Object.getPrototypeOf(LegacyCardBase)).apply(this, arguments));
  }

  _createClass(LegacyCardBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          title = _props.title,
          resource = _props.resource,
          imageResource = _props.imageResource,
          linkClassProps = _props.linkClassProps,
          variant = _props.variant;

      var rootClasses = [classes.card];
      var image = void 0,
          image_url = void 0;
      var scale_factor = Math.floor(100 * resource.image_height / resource.image_width * 100.00) / 100.00;

      // Determine Image
      if (typeof imageResource == 'string') {
        image_url = imageResource;
        image = _react2.default.createElement(
          this.props.linkClass,
          _extends({
            title: title,
            style: { 'padding': scale_factor + '% 0 0 0' }
          }, linkClassProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          }),
          _react2.default.createElement('img', { src: image_url, alt: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          })
        );
      } else {
        if (variant == 'large' && imageResource.versions.CARD_LARGE) {
          image_url = imageResource.versions.CARD_LARGE.url;
        } else if (imageResource.versions.CARD_SMALL) {
          image_url = imageResource.versions.CARD_SMALL.url;
        }
        if (image_url) {
          image = _react2.default.createElement(
            this.props.linkClass,
            _extends({
              title: title,
              style: { 'padding': scale_factor + '% 0 0 0' }
            }, linkClassProps, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              }
            }),
            _react2.default.createElement('img', { src: image_url, alt: title, __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            })
          );
        }
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(rootClasses), __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        },
        _react2.default.createElement(
          'div',
          { className: classes.cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'card-header', __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            _react2.default.createElement(
              'div',
              { className: classes.cardImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                }
              },
              image
            ),
            _react2.default.createElement(
              'div',
              { className: classes.sponsorText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                }
              },
              resource.advert_type_label || 'advertisement'
            )
          )
        )
      );
    }
  }]);

  return LegacyCardBase;
}(_react2.default.Component);

LegacyCardBase.propTypes = {
  classes: _propTypes2.default.object,
  variant: _propTypes2.default.oneOf(['large', 'small']),
  title: _propTypes2.default.string,
  content: _propTypes2.default.node,
  linkClass: _propTypes2.default.func,
  linkClassProps: _propTypes2.default.object,
  //href: PropTypes.string,
  imageResource: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.node]),
  resource: _propTypes2.default.object
};

LegacyCardBase.defaultProps = {
  variant: 'small'
};

exports.default = (0, _styles.withStyles)(styles)(LegacyCardBase);