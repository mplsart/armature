'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    }, _defineProperty(_card, 'margin', '8px'), _defineProperty(_card, 'transition', 'box-shadow .25s'), _defineProperty(_card, 'box-shadow', '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'), _defineProperty(_card, '&:hover', {
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

    cardImage: {
      '& a': {
        //.fixed-size a {
        /* Helper class for sizing image container in masonry layouts */

        'display': 'block',
        'position': 'relative',
        'height': '0',
        'overflow': 'hidden',
        'padding': '52.42% 0 0 0', /* Note padding-top is overridden via JS */
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
    }
  };
};

var LegacyCard = function (_React$Component) {
  _inherits(LegacyCard, _React$Component);

  function LegacyCard() {
    _classCallCheck(this, LegacyCard);

    return _possibleConstructorReturn(this, (LegacyCard.__proto__ || Object.getPrototypeOf(LegacyCard)).apply(this, arguments));
  }

  _createClass(LegacyCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          title = _props.title,
          content = _props.content,
          variant = _props.variant;


      var rootClasses = [classes.card];

      var image = void 0;
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(rootClasses) },
        _react2.default.createElement(
          'div',
          { className: classes.cardContainer },
          _react2.default.createElement(
            'div',
            { className: 'card-header' },
            _react2.default.createElement(
              'div',
              { className: classes.cardImage },
              _react2.default.createElement(
                'a',
                {
                  title: title,
                  style: { 'padding': '52.57% 0 0 0' },
                  href: '/events/illoshow-at-solid-state-vinyl-records', 'data-reactid': '65' },
                _react2.default.createElement('img', { src: 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTYzNTAwMDE/card_small.png' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.cardContent },
            _react2.default.createElement(
              'div',
              { className: classes.cardTitle },
              _react2.default.createElement(
                'a',
                { href: '#' },
                title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: classes.cardDetail },
              content
            )
          )
        )
      );
    }
  }]);

  return LegacyCard;
}(_react2.default.Component);

LegacyCard.propTypes = {
  classes: _propTypes2.default.object,
  variant: _propTypes2.default.string, // TODO: one of 'big'
  title: _propTypes2.default.string,
  content: _propTypes2.default.node

};

exports.default = (0, _styles.withStyles)(styles)(LegacyCard);