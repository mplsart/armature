'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = 'src/ui/lightbox/SlideshowLightboxDemo.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SlideshowLightbox = require('./SlideshowLightbox');

var _SlideshowLightbox2 = _interopRequireDefault(_SlideshowLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var images = [
//'https://loremflickr.com/1920/1080/art?random=1',
//'https://loremflickr.com/1080/1920/art?random=2',
//'https://loremflickr.com/1920/1080/art?random=3',
//'https://loremflickr.com/1080/1920/art?random=4',
//'https://loremflickr.com/1920/1080/art?random=5',
//'https://loremflickr.com/1080/1920/art?random=6',
'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_1_theheavycrown.jpeg', 'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_4_drama.jpeg', 'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_3_DarthChCaptain.jpg', 'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_4_install.jpg', 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTcxOTAwMDE/card_large.png'];

var SlideshowLightboxDemo = function (_React$Component) {
  _inherits(SlideshowLightboxDemo, _React$Component);

  _createClass(SlideshowLightboxDemo, null, [{
    key: 'onImageLoadError',
    value: function onImageLoadError(imageSrc, _srcType, errorEvent) {
      console.error('Could not load image at ' + imageSrc, errorEvent); // eslint-disable-line no-console
    }
  }]);

  function SlideshowLightboxDemo() {
    _classCallCheck(this, SlideshowLightboxDemo);

    var _this = _possibleConstructorReturn(this, (SlideshowLightboxDemo.__proto__ || Object.getPrototypeOf(SlideshowLightboxDemo)).call(this));

    _this.state = { index: 0, isOpen: false };

    _this.openLightbox = _this.openLightbox.bind(_this);
    _this.closeLightbox = _this.closeLightbox.bind(_this);
    _this.moveNext = _this.moveNext.bind(_this);
    _this.movePrev = _this.movePrev.bind(_this);
    return _this;
  }

  _createClass(SlideshowLightboxDemo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-underscore-dangle
        //styles._insertCss();
      }
    }
  }, {
    key: 'openLightbox',
    value: function openLightbox() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'moveNext',
    value: function moveNext() {
      this.setState({ index: (this.state.index + 1) % images.length });
    }
  }, {
    key: 'movePrev',
    value: function movePrev() {
      this.setState({
        index: (this.state.index + images.length - 1) % images.length
      });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.isOpen) {
        return _react2.default.createElement(_SlideshowLightbox2.default, {
          mainSrc: images[this.state.index],
          nextSrc: images[(this.state.index + 1) % images.length],
          prevSrc: images[(this.state.index + images.length - 1) % images.length],
          onCloseRequest: this.closeLightbox,
          onMovePrevRequest: this.movePrev,
          onMoveNextRequest: this.moveNext,
          onImageLoadError: _SlideshowLightbox2.default.onImageLoadError,
          animationOnKeyInput: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        });
      }

      return _react2.default.createElement(
        'button',
        { onClick: this.openLightbox, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        },
        'open'
      );
    }
  }]);

  return SlideshowLightboxDemo;
}(_react2.default.Component);

exports.default = SlideshowLightboxDemo;