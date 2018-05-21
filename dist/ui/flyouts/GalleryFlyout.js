'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/flyouts/GalleryFlyout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _FlyoutBase = require('./FlyoutBase');

var _FlyoutBase2 = _interopRequireDefault(_FlyoutBase);

var _CompactGalleryCard = require('../../../src/ui/cards/CompactGalleryCard');

var _CompactGalleryCard2 = _interopRequireDefault(_CompactGalleryCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    paper: {
      padding: theme.spacing.unit
    },
    popover: {
      pointerEvents: 'none'
    },
    popperClose: {
      pointerEvents: 'none'
    },
    flyoutContent: {
      //width:'500px',
      //height:'300px',
    }
  };
};

var GalleryPopover = function (_React$Component) {
  _inherits(GalleryPopover, _React$Component);

  function GalleryPopover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GalleryPopover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GalleryPopover.__proto__ || Object.getPrototypeOf(GalleryPopover)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      popperOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GalleryPopover, [{
    key: 'handlePopoverOpen',
    value: function handlePopoverOpen(event) {
      this.setState({ anchorEl: event.target });
    }
  }, {
    key: 'handlePopoverClose',
    value: function handlePopoverClose() {
      this.setState({ anchorEl: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes;
      var _state = this.state,
          anchorEl = _state.anchorEl,
          popperOpen = _state.popperOpen;

      var open = !!anchorEl;

      var resource = { "_meta": { "is_verbose": true, "resource_type": "Venue" }, "address": "210 N First St", "address2": "", "category": "gallery", "city": "Minneapolis", "content": "CIRCA Gallery seeks to provide awareness, inspiration, and appreciation for a variety of contemporary art styles and mediums. For nearly 30 years, we have assisted and advised corporations, architects, designers, and collectors, but our door is open to anyone who is curious about art, respectful of our artists, or just in the neighborhood (four-legged friends included). We present several annual exhibitions, with new shows opening every six weeks. In addition to our exhibition program, a rotating selection of new artwork can be viewed throughout the year.", "country": "USA", "elsewhere": [{ "link_label": "", "link_type": "facebook", "link_type_id": "", "link_url": "https://www.facebook.com/circagallerympls" }, { "link_label": "", "link_type": "twitter", "link_type_id": "", "link_url": "https://twitter.com/circagallery" }, { "link_label": "", "link_type": "instagram", "link_type_id": "", "link_url": "https://www.instagram.com/circagallery_mn/" }], "email": "staff@circagallery.org", "geo": [{ "lat": 44.984317699999998, "lon": -93.269294799999997 }], "hours": { "0": [null, null], "1": [null, null], "2": ["13:00", "18:00"], "3": ["13:00", "18:00"], "4": ["13:00", "21:00"], "5": ["13:00", "21:00"], "6": ["11:00", "16:00"], "description": "" }, "is_closed": false, "is_premium_profile": true, "multiple_locations_label": "", "name": "CIRCA Gallery", "neighborhood_resource_id": null, "phone": "612-332-2386", "primary_image_resource": { "_meta": { "is_verbose": true, "resource_type": "FileContainer" }, "caption": null, "created_date": "2018-01-10T18:08:08Z", "modified_date": "2018-01-10T18:08:08Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE", "versions": { "CARD_LARGE": { "height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/card_large.png", "width": 900 }, "CARD_PROGRESSIVE": { "height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/card_progressive.png", "width": 40 }, "CARD_SMALL": { "height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/card_small.png", "width": 350 }, "FULL": "", "SIZED": "", "THUMB": { "height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/thumb.png", "width": 160 } } }, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE", "resource_id": "VmVudWUeY2lyY2EtZ2FsbGVyeQ", "resource_url": "/api/venues/VmVudWUeY2lyY2EtZ2FsbGVyeQ", "slug": "circa-gallery", "state": "MN", "summary": "Regional and national contemporary art", "website": "http://www.circagallery.org/" };
      return _react2.default.createElement(
        'span',
        { onMouseOver: this.handlePopoverOpen.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        _react2.default.createElement(
          _FlyoutBase2.default,
          {
            open: open,
            anchorEl: anchorEl,
            onClose: this.handlePopoverClose.bind(this),
            flyoutContent: _react2.default.createElement(_CompactGalleryCard2.default, { resource: resource, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            }), __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          _react2.default.createElement(
            'a',
            { href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            children
          )
        )
      );
    }
  }]);

  return GalleryPopover;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(GalleryPopover);