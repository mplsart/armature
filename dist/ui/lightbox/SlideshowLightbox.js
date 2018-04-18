'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('material-ui/styles');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _utils = require('./utils');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {},
  outer: { // An outer wrapper that is in the content of the fullscreen modal
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    outline: 'none',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10000,
    width: '100%',
    height: '100%',
    '-ms-content-zooming': 'none',
    '-ms-user-select': 'none',
    '-ms-touch-select': 'none',
    'touch-action': 'none',
    overflow: 'hidden'
  },
  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden'
  },

  navButtons: {
    border: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '20px',
    height: '34px',
    padding: '40px 30px',
    margin: 'auto',
    cursor: 'pointer',
    opacity: 0.2,
    background: 'rgba(0, 0, 0, 0.2) no-repeat center',

    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 1)' },

    '&:active': { backgroundColor: 'rgba(0, 0, 0, 1)' }
  },
  navButtonPrev: {
    left: 0,
    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==')"
  },
  navButtonNext: {
    right: 0,
    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+')"
  },

  // Toolbar Buttons
  builtinButton: {
    width: '40px',
    height: '35px',
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    opacity: '0.7',
    '&:hover': {
      opacity: 1
    }
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    'max-width': 'none',
    '-ms-content-zooming': 'none',
    '-ms-user-select': 'none',
    '-ms-touch-select': 'none',
    'touch-action': 'none'
  },

  // Toolbars
  toolbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    top: 0,
    height: '50px'
  },

  toolbarSide: {
    height: '50px',
    margin: 0
  },

  toolbarLeftSide: {
    paddingLeft: '20px',
    paddingRight: 0,
    flex: '0 1 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  toolbarLeftSideNoFlex: {
    left: 0,
    overflow: 'visible'
  },

  toolbarRightSide: {
    paddingLeft: 0,
    paddingRight: '20px',
    flex: '0 0 auto'
  },

  toolbarItem: {
    display: 'inline-block',
    lineHeight: '50px',
    padding: 0,
    color: '#fff',
    fontSize: '120%',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  toolbarItemChild: {
    verticalAlign: 'middle',
    height: '50px'
  },

  closeButton: {
    background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=") no-repeat center'
  }

  /*
  zoomInButton: {
    background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+') no-repeat center",
  },
   zoomOutButton: {
    background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=') no-repeat center",
  }
  */
};

var ieVersion = (0, _utils.getIEVersion)();

var SlideshowLightbox = function (_React$Component) {
  _inherits(SlideshowLightbox, _React$Component);

  _createClass(SlideshowLightbox, [{
    key: 'handleWindowResize',


    // Handle the window resize event
    value: function handleWindowResize() {
      this.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
    }
  }], [{
    key: 'isTargetMatchImage',
    value: function isTargetMatchImage(target) {
      return target && /ril-image-current/.test(target.className);
    }
  }, {
    key: 'parseMouseEvent',
    value: function parseMouseEvent(mouseEvent) {
      return {
        id: 'mouse',
        source: _constants.SOURCE_MOUSE,
        x: parseInt(mouseEvent.clientX, 10),
        y: parseInt(mouseEvent.clientY, 10)
      };
    }
  }, {
    key: 'parseTouchPointer',
    value: function parseTouchPointer(touchPointer) {
      return {
        id: touchPointer.identifier,
        source: _constants.SOURCE_TOUCH,
        x: parseInt(touchPointer.clientX, 10),
        y: parseInt(touchPointer.clientY, 10)
      };
    }
  }, {
    key: 'parsePointerEvent',
    value: function parsePointerEvent(pointerEvent) {
      return {
        id: pointerEvent.pointerId,
        source: _constants.SOURCE_POINTER,
        x: parseInt(pointerEvent.clientX, 10),
        y: parseInt(pointerEvent.clientY, 10)
      };
    }

    // Request to transition to the previous image

  }, {
    key: 'getTransform',
    value: function getTransform(_ref) {
      var _ref$x = _ref.x,
          x = _ref$x === undefined ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === undefined ? 0 : _ref$y,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === undefined ? 1 : _ref$zoom,
          width = _ref.width,
          targetWidth = _ref.targetWidth;

      //console.log({ x:x, y:y, zoom: zoom, width: width, targetWidth: targetWidth });

      var nextX = x;
      var isOldIE = ieVersion < 10;
      var windowWidth = (0, _utils.getWindowWidth)();
      if (width > windowWidth) {
        nextX += (windowWidth - width) / 2;
      }

      //targetWidth = targetWidth - 100; // I added this to enforce a margin
      var scaleFactor = zoom * (targetWidth / width);

      return isOldIE ? { msTransform: 'translate(' + nextX + 'px,' + y + 'px) scale(' + scaleFactor + ')' } : {
        transform: 'translate3d(' + nextX + 'px,' + y + 'px,0) scale3d(' + scaleFactor + ',' + scaleFactor + ',1)'
      };
    }
  }]);

  function SlideshowLightbox(props) {
    _classCallCheck(this, SlideshowLightbox);

    var _this = _possibleConstructorReturn(this, (SlideshowLightbox.__proto__ || Object.getPrototypeOf(SlideshowLightbox)).call(this, props));

    _this.state = {
      //-----------------------------
      // Animation
      //-----------------------------

      // Lightbox is closing
      // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
      isClosing: !props.animationDisabled,

      // Component parts should animate (e.g., when images are moving, or image is being zoomed)
      shouldAnimate: false,

      //-----------------------------
      // Zoom settings
      //-----------------------------
      // Zoom level of image
      zoomLevel: _constants.MIN_ZOOM_LEVEL,

      //-----------------------------
      // Image position settings
      //-----------------------------
      // Horizontal offset from center
      offsetX: 0,

      // Vertical offset from center
      offsetY: 0,

      // image load error for srcType
      loadErrorStatus: {}
    };

    //this.closeIfClickInner = this.closeIfClickInner.bind(this);
    _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_this);
    _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_this);
    _this.handleKeyInput = _this.handleKeyInput.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handlePointerEvent = _this.handlePointerEvent.bind(_this);
    _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_this);
    _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_this);
    _this.requestClose = _this.requestClose.bind(_this);
    _this.requestMoveNext = _this.requestMoveNext.bind(_this);
    _this.requestMovePrev = _this.requestMovePrev.bind(_this);
    return _this;
  }

  _createClass(SlideshowLightbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Timeouts - always clear it before umount
      this.timeouts = [];

      // Current action
      this.currentAction = _constants.ACTION_NONE;

      // Events source
      this.eventsSource = _constants.SOURCE_ANY;

      // Empty pointers list
      this.pointerList = [];

      // Prevent inner close
      this.preventInnerClose = false;
      this.preventInnerCloseTimeout = null;

      // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc
      this.keyPressed = false;

      // Used to store load state / dimensions of images
      this.imageCache = {};

      // Time the last keydown event was called (used in keyboard action rate limiting)
      this.lastKeyDownTime = 0;

      // Used for debouncing window resize event
      this.resizeTimeout = null;

      // Used to determine when actions are triggered by the scroll wheel
      this.wheelActionTimeout = null;
      this.resetScrollTimeout = null;
      this.scrollX = 0;
      this.scrollY = 0;

      // Used in panning zoomed images
      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0;

      // Used to swipe
      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0;

      // Used to pinch
      this.pinchTouchList = null;
      this.pinchDistance = 0;

      // Used to differentiate between images with identical src
      this.keyCounter = 0;

      // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)
      this.moveRequested = false;

      if (!this.props.animationDisabled) {
        // Make opening animation play
        this.setState({ isClosing: false });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      //SlideshowLightbox.loadStyles();

      this.listeners = {
        resize: this.handleWindowResize,
        mouseup: this.handleMouseUp,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        pointerdown: this.handlePointerEvent,
        pointermove: this.handlePointerEvent,
        pointerup: this.handlePointerEvent,
        pointercancel: this.handlePointerEvent
        //keyup: this.handleKeyInput,
        //keydown: this.handleKeyInput,

      };
      Object.keys(this.listeners).forEach(function (type) {
        global.window.top.addEventListener(type, _this2.listeners[type]);
      });

      this.loadAllImages();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // Iterate through the source types for prevProps and nextProps to
      //  determine if any of the sources changed
      var sourcesChanged = false;
      var prevSrcDict = {};
      var nextSrcDict = {};
      this.getSrcTypes().forEach(function (srcType) {
        if (_this3.props[srcType.name] !== nextProps[srcType.name]) {
          sourcesChanged = true;

          prevSrcDict[_this3.props[srcType.name]] = true;
          nextSrcDict[nextProps[srcType.name]] = true;
        }
      });

      if (sourcesChanged || this.moveRequested) {
        // Reset the loaded state for images not rendered next
        Object.keys(prevSrcDict).forEach(function (prevSrc) {
          if (!(prevSrc in nextSrcDict) && prevSrc in _this3.imageCache) {
            _this3.imageCache[prevSrc].loaded = false;
          }
        });

        this.moveRequested = false;

        // Load any new images
        this.loadAllImages(nextProps);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      // Wait for move...
      return !this.moveRequested;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this4 = this;

      this.didUnmount = true;
      Object.keys(this.listeners).forEach(function (type) {
        global.window.top.removeEventListener(type, _this4.listeners[type]);
      });
      this.timeouts.forEach(function (tid) {
        return clearTimeout(tid);
      });
    }
  }, {
    key: 'setTimeout',
    value: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (func, time) {
      var _this5 = this;

      var id = setTimeout(function () {
        _this5.timeouts = _this5.timeouts.filter(function (tid) {
          return tid !== id;
        });
        func();
      }, time);
      this.timeouts.push(id);
      return id;
    })
  }, {
    key: 'setPreventInnerClose',
    value: function setPreventInnerClose() {
      var _this6 = this;

      if (this.preventInnerCloseTimeout) {
        this.clearTimeout(this.preventInnerCloseTimeout);
      }
      this.preventInnerClose = true;
      this.preventInnerCloseTimeout = this.setTimeout(function () {
        _this6.preventInnerClose = false;
        _this6.preventInnerCloseTimeout = null;
      }, 100);
    }

    // Get info for the best suited image to display with the given srcType

  }, {
    key: 'getBestImageForType',
    value: function getBestImageForType(srcType) {
      //console.log([srcType, this.props[srcType]]);

      var imageSrc = this.props[srcType];
      var fitSizes = {};

      if (this.isImageLoaded(imageSrc)) {
        // Use full-size image if available
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height);
      } else if (this.isImageLoaded(this.props[srcType + 'Thumbnail'])) {
        // Fall back to using thumbnail if the image has not been loaded
        imageSrc = this.props[srcType + 'Thumbnail'];
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, true);
      } else {
        return null;
      }

      return {
        src: imageSrc,
        height: this.imageCache[imageSrc].height,
        width: this.imageCache[imageSrc].width,
        targetHeight: fitSizes.height,
        targetWidth: fitSizes.width
      };

      return {
        src: imageSrc
      };
    }

    // Get sizing for when an image is larger than the window

  }, {
    key: 'getFitSizes',
    value: function getFitSizes(width, height, stretch) {
      var boxSize = this.getLightboxRect();
      var maxHeight = boxSize.height - this.props.imagePadding * 2;
      var maxWidth = boxSize.width - this.props.imagePadding * 2;

      if (!stretch) {
        maxHeight = Math.min(maxHeight, height);
        maxWidth = Math.min(maxWidth, width);
      }

      var maxRatio = maxWidth / maxHeight;
      var srcRatio = width / height;

      if (maxRatio > srcRatio) {
        // height is the constraining dimension of the photo
        return {
          width: width * maxHeight / height,
          height: maxHeight
        };
      }

      return {
        width: maxWidth,
        height: height * maxWidth / width
      };
    }
  }, {
    key: 'getMaxOffsets',
    value: function getMaxOffsets() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;

      var currentImageInfo = this.getBestImageForType('mainSrc');
      if (currentImageInfo === null) {
        return { maxX: 0, minX: 0, maxY: 0, minY: 0 };
      }

      var boxSize = this.getLightboxRect();
      var zoomMultiplier = this.getZoomMultiplier(zoomLevel);

      var maxX = 0;
      if (zoomMultiplier * currentImageInfo.width - boxSize.width < 0) {
        // if there is still blank space in the X dimension, don't limit except to the opposite edge
        maxX = (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2;
      } else {
        maxX = (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
      }

      var maxY = 0;
      if (zoomMultiplier * currentImageInfo.height - boxSize.height < 0) {
        // if there is still blank space in the Y dimension, don't limit except to the opposite edge
        maxY = (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2;
      } else {
        maxY = (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2;
      }

      return {
        maxX: maxX,
        maxY: maxY,
        minX: -1 * maxX,
        minY: -1 * maxY
      };
    }

    // Get image src types

  }, {
    key: 'getSrcTypes',
    value: function getSrcTypes() {
      return [{
        name: 'mainSrc',
        keyEnding: 'i' + this.keyCounter
      }, {
        name: 'mainSrcThumbnail',
        keyEnding: 't' + this.keyCounter
      }, {
        name: 'nextSrc',
        keyEnding: 'i' + (this.keyCounter + 1)
      }, {
        name: 'nextSrcThumbnail',
        keyEnding: 't' + (this.keyCounter + 1)
      }, {
        name: 'prevSrc',
        keyEnding: 'i' + (this.keyCounter - 1)
      }, {
        name: 'prevSrcThumbnail',
        keyEnding: 't' + (this.keyCounter - 1)
      }];
    }

    /**
     * Get the size of the lightbox in pixels
     */

  }, {
    key: 'getLightboxRect',
    value: function getLightboxRect() {
      //if (this.outerEl) {
      //  return this.outerEl.getBoundingClientRect();
      //}

      return {
        width: (0, _utils.getWindowWidth)(),
        height: (0, _utils.getWindowHeight)(),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }

    /**
     * Get sizing when the image is scaled
     */

  }, {
    key: 'getZoomMultiplier',
    value: function getZoomMultiplier() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;

      return Math.pow(_constants.ZOOM_RATIO, zoomLevel);
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      this.timeouts = this.timeouts.filter(function (tid) {
        return tid !== id;
      });
      clearTimeout(id);
    })

    /**
     * Handle user keyboard actions
     */

  }, {
    key: 'handleKeyInput',
    value: function handleKeyInput(event) {
      event.stopPropagation();

      // Ignore key input during animations
      if (this.isAnimating()) {
        return;
      }

      // Allow slightly faster navigation through the images when user presses keys repeatedly
      if (event.type === 'keyup') {
        this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus;
        return;
      }

      var keyCode = event.which || event.keyCode;

      // Ignore key presses that happen too close to each other (when rapid fire key pressing or holding down the key)
      // But allow it if it's a lightbox closing action
      var currentTime = new Date();
      if (currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== _constants.KEYS.ESC) {
        return;
      }
      this.lastKeyDownTime = currentTime.getTime();

      switch (keyCode) {
        // ESC key closes the lightbox
        case _constants.KEYS.ESC:
          event.preventDefault();
          this.requestClose(event);
          break;

        // Left arrow key moves to previous image
        case _constants.KEYS.LEFT_ARROW:
          if (!this.props.prevSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMovePrev(event);
          break;

        // Right arrow key moves to next image
        case _constants.KEYS.RIGHT_ARROW:
          if (!this.props.nextSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMoveNext(event);
          break;

        default:
      }
    }

    /**
     * Handle a mouse wheel event over the lightbox container
     */

  }, {
    key: 'handleOuterMousewheel',
    value: function handleOuterMousewheel(event) {
      var _this7 = this;

      // Prevent scrolling of the background
      event.preventDefault();
      event.stopPropagation();

      var xThreshold = _constants.WHEEL_MOVE_X_THRESHOLD;
      var actionDelay = 0;
      var imageMoveDelay = 500;

      this.clearTimeout(this.resetScrollTimeout);
      this.resetScrollTimeout = this.setTimeout(function () {
        _this7.scrollX = 0;
        _this7.scrollY = 0;
      }, 300);

      // Prevent rapid-fire zoom behavior
      if (this.wheelActionTimeout !== null || this.isAnimating()) {
        return;
      }

      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        // handle horizontal scrolls with image moves
        this.scrollY = 0;
        this.scrollX += event.deltaX;

        var bigLeapX = xThreshold / 2;
        // If the scroll amount has accumulated sufficiently, or a large leap was taken
        if (this.scrollX >= xThreshold || event.deltaX >= bigLeapX) {
          // Scroll right moves to next
          this.requestMoveNext(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        } else if (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) {
          // Scroll left moves to previous
          this.requestMovePrev(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        }
      }

      // Allow successive actions after the set delay
      if (actionDelay !== 0) {
        this.wheelActionTimeout = this.setTimeout(function () {
          _this7.wheelActionTimeout = null;
        }, actionDelay);
      }
    }
  }, {
    key: 'handleImageMouseWheel',
    value: function handleImageMouseWheel(event) {
      event.preventDefault();
      var yThreshold = _constants.WHEEL_MOVE_Y_THRESHOLD;

      if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
        event.stopPropagation();
        // If the vertical scroll amount was large enough, perform a zoom
        if (Math.abs(event.deltaY) < yThreshold) {
          return;
        }

        this.scrollX = 0;
        this.scrollY += event.deltaY;

        this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
      }
    }

    /**
     * Handle a double click on the current image
     */

  }, {
    key: 'handleImageDoubleClick',
    value: function handleImageDoubleClick(event) {
      if (this.state.zoomLevel > _constants.MIN_ZOOM_LEVEL) {
        // A double click when zoomed in zooms all the way out
        this.changeZoom(_constants.MIN_ZOOM_LEVEL, event.clientX, event.clientY);
      } else {
        // A double click when zoomed all the way out zooms in
        this.changeZoom(this.state.zoomLevel + _constants.ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
      }
    }
  }, {
    key: 'shouldHandleEvent',
    value: function shouldHandleEvent(source) {
      if (this.eventsSource === source) {
        return true;
      }
      if (this.eventsSource === _constants.SOURCE_ANY) {
        this.eventsSource = source;
        return true;
      }
      switch (source) {
        case _constants.SOURCE_MOUSE:
          return false;
        case _constants.SOURCE_TOUCH:
          this.eventsSource = _constants.SOURCE_TOUCH;
          this.filterPointersBySource();
          return true;
        case _constants.SOURCE_POINTER:
          if (this.eventsSource === _constants.SOURCE_MOUSE) {
            this.eventsSource = _constants.SOURCE_POINTER;
            this.filterPointersBySource();
            return true;
          }
          return false;
        default:
          return false;
      }
    }
  }, {
    key: 'addPointer',
    value: function addPointer(pointer) {
      this.pointerList.push(pointer);
    }
  }, {
    key: 'removePointer',
    value: function removePointer(pointer) {
      this.pointerList = this.pointerList.filter(function (_ref2) {
        var id = _ref2.id;
        return id !== pointer.id;
      });
    }
  }, {
    key: 'filterPointersBySource',
    value: function filterPointersBySource() {
      var _this8 = this;

      this.pointerList = this.pointerList.filter(function (_ref3) {
        var source = _ref3.source;
        return source === _this8.eventsSource;
      });
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      if (this.shouldHandleEvent(_constants.SOURCE_MOUSE) && SlideshowLightbox.isTargetMatchImage(event.target)) {
        this.addPointer(SlideshowLightbox.parseMouseEvent(event));
        this.multiPointerStart(event);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (this.shouldHandleEvent(_constants.SOURCE_MOUSE)) {
        this.multiPointerMove(event, [SlideshowLightbox.parseMouseEvent(event)]);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      if (this.shouldHandleEvent(_constants.SOURCE_MOUSE)) {
        this.removePointer(SlideshowLightbox.parseMouseEvent(event));
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: 'handlePointerEvent',
    value: function handlePointerEvent(event) {
      if (this.shouldHandleEvent(_constants.SOURCE_POINTER)) {
        switch (event.type) {
          case 'pointerdown':
            if (SlideshowLightbox.isTargetMatchImage(event.target)) {
              this.addPointer(SlideshowLightbox.parsePointerEvent(event));
              this.multiPointerStart(event);
            }
            break;
          case 'pointermove':
            this.multiPointerMove(event, [SlideshowLightbox.parsePointerEvent(event)]);
            break;
          case 'pointerup':
          case 'pointercancel':
            this.removePointer(SlideshowLightbox.parsePointerEvent(event));
            this.multiPointerEnd(event);
            break;
          default:
            break;
        }
      }
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      var _this9 = this;

      if (this.shouldHandleEvent(_constants.SOURCE_TOUCH) && SlideshowLightbox.isTargetMatchImage(event.target)) {
        [].forEach.call(event.changedTouches, function (eventTouch) {
          return _this9.addPointer(SlideshowLightbox.parseTouchPointer(eventTouch));
        });
        this.multiPointerStart(event);
      }
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (this.shouldHandleEvent(_constants.SOURCE_TOUCH)) {
        this.multiPointerMove(event, [].map.call(event.changedTouches, function (eventTouch) {
          return SlideshowLightbox.parseTouchPointer(eventTouch);
        }));
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      var _this10 = this;

      if (this.shouldHandleEvent(_constants.SOURCE_TOUCH)) {
        [].map.call(event.changedTouches, function (touch) {
          return _this10.removePointer(SlideshowLightbox.parseTouchPointer(touch));
        });
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: 'decideMoveOrSwipe',
    value: function decideMoveOrSwipe(pointer) {
      if (this.state.zoomLevel <= _constants.MIN_ZOOM_LEVEL) {
        this.handleSwipeStart(pointer);
      } else {
        this.handleMoveStart(pointer);
      }
    }
  }, {
    key: 'multiPointerStart',
    value: function multiPointerStart(event) {
      this.handleEnd(null);
      switch (this.pointerList.length) {
        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }
        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
        default:
          break;
      }
    }
  }, {
    key: 'multiPointerMove',
    value: function multiPointerMove(event, pointerList) {
      switch (this.currentAction) {
        case _constants.ACTION_MOVE:
          {
            event.preventDefault();
            this.handleMove(pointerList[0]);
            break;
          }
        case _constants.ACTION_SWIPE:
          {
            event.preventDefault();
            this.handleSwipe(pointerList[0]);
            break;
          }
        case _constants.ACTION_PINCH:
          {
            event.preventDefault();
            this.handlePinch(pointerList);
            break;
          }
        default:
          break;
      }
    }
  }, {
    key: 'multiPointerEnd',
    value: function multiPointerEnd(event) {
      if (this.currentAction !== _constants.ACTION_NONE) {
        this.setPreventInnerClose();
        this.handleEnd(event);
      }
      switch (this.pointerList.length) {
        case 0:
          {
            this.eventsSource = _constants.SOURCE_ANY;
            break;
          }
        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }
        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
        default:
          break;
      }
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd(event) {
      switch (this.currentAction) {
        case _constants.ACTION_MOVE:
          this.handleMoveEnd(event);
          break;
        case _constants.ACTION_SWIPE:
          this.handleSwipeEnd(event);
          break;
        case _constants.ACTION_PINCH:
          this.handlePinchEnd(event);
          break;
        default:
          break;
      }
    }

    // Handle move start over the lightbox container
    // This happens:
    // - On a mouseDown event
    // - On a touchstart event

  }, {
    key: 'handleMoveStart',
    value: function handleMoveStart(_ref4) {
      var clientX = _ref4.x,
          clientY = _ref4.y;

      if (!this.props.enableZoom) {
        return;
      }
      this.currentAction = _constants.ACTION_MOVE;
      this.moveStartX = clientX;
      this.moveStartY = clientY;
      this.moveStartOffsetX = this.state.offsetX;
      this.moveStartOffsetY = this.state.offsetY;
    }

    // Handle dragging over the lightbox container
    // This happens:
    // - After a mouseDown and before a mouseUp event
    // - After a touchstart and before a touchend event

  }, {
    key: 'handleMove',
    value: function handleMove(_ref5) {
      var clientX = _ref5.x,
          clientY = _ref5.y;

      var newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX;
      var newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;
      if (this.state.offsetX !== newOffsetX || this.state.offsetY !== newOffsetY) {
        this.setState({
          offsetX: newOffsetX,
          offsetY: newOffsetY
        });
      }
    }
  }, {
    key: 'handleMoveEnd',
    value: function handleMoveEnd() {
      var _this11 = this;

      this.currentAction = _constants.ACTION_NONE;
      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0;
      // Snap image back into frame if outside max offset range
      var maxOffsets = this.getMaxOffsets();
      var nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX));
      var nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));
      if (nextOffsetX !== this.state.offsetX || nextOffsetY !== this.state.offsetY) {
        this.setState({
          offsetX: nextOffsetX,
          offsetY: nextOffsetY,
          shouldAnimate: true
        });
        this.setTimeout(function () {
          _this11.setState({ shouldAnimate: false });
        }, this.props.animationDuration);
      }
    }
  }, {
    key: 'handleSwipeStart',
    value: function handleSwipeStart(_ref6) {
      var clientX = _ref6.x,
          clientY = _ref6.y;

      this.currentAction = _constants.ACTION_SWIPE;
      this.swipeStartX = clientX;
      this.swipeStartY = clientY;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: 'handleSwipe',
    value: function handleSwipe(_ref7) {
      var clientX = _ref7.x,
          clientY = _ref7.y;

      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: 'handleSwipeEnd',
    value: function handleSwipeEnd(event) {
      var xDiff = this.swipeEndX - this.swipeStartX;
      var xDiffAbs = Math.abs(xDiff);
      var yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);

      this.currentAction = _constants.ACTION_NONE;
      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0;

      if (!event || this.isAnimating() || xDiffAbs < yDiffAbs * 1.5) {
        return;
      }

      if (xDiffAbs < _constants.MIN_SWIPE_DISTANCE) {
        var boxRect = this.getLightboxRect();
        if (xDiffAbs < boxRect.width / 4) {
          return;
        }
      }

      if (xDiff > 0 && this.props.prevSrc) {
        event.preventDefault();
        this.requestMovePrev();
      } else if (xDiff < 0 && this.props.nextSrc) {
        event.preventDefault();
        this.requestMoveNext();
      }
    }
  }, {
    key: 'calculatePinchDistance',
    value: function calculatePinchDistance() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref9 = _slicedToArray(_ref8, 2),
          a = _ref9[0],
          b = _ref9[1];

      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
  }, {
    key: 'calculatePinchCenter',
    value: function calculatePinchCenter() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref11 = _slicedToArray(_ref10, 2),
          a = _ref11[0],
          b = _ref11[1];

      return {
        x: a.x - (a.x - b.x) / 2,
        y: a.y - (a.y - b.y) / 2
      };
    }
  }, {
    key: 'handlePinchStart',
    value: function handlePinchStart(pointerList) {
      if (!this.props.enableZoom) {
        return;
      }
      this.currentAction = _constants.ACTION_PINCH;
      this.pinchTouchList = pointerList.map(function (_ref12) {
        var id = _ref12.id,
            x = _ref12.x,
            y = _ref12.y;
        return { id: id, x: x, y: y };
      });
      this.pinchDistance = this.calculatePinchDistance();
    }
  }, {
    key: 'handlePinch',
    value: function handlePinch(pointerList) {
      this.pinchTouchList = this.pinchTouchList.map(function (oldPointer) {
        for (var i = 0; i < pointerList.length; i += 1) {
          if (pointerList[i].id === oldPointer.id) {
            return pointerList[i];
          }
        }

        return oldPointer;
      });

      var newDistance = this.calculatePinchDistance();

      // Propably this should be more complicated... but works fine?
      var zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;

      this.pinchDistance = newDistance;

      var _calculatePinchCenter = this.calculatePinchCenter(this.pinchTouchList),
          clientX = _calculatePinchCenter.x,
          clientY = _calculatePinchCenter.y;

      this.changeZoom(zoomLevel, clientX, clientY);
    }
  }, {
    key: 'handlePinchEnd',
    value: function handlePinchEnd() {
      this.currentAction = _constants.ACTION_NONE;
      this.pinchTouchList = null;
      this.pinchDistance = 0;
    }

    // Handle the window resize event

  }, {
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
    }
  }, {
    key: 'handleZoomInButtonClick',
    value: function handleZoomInButtonClick() {
      this.changeZoom(this.state.zoomLevel + _constants.ZOOM_BUTTON_INCREMENT_SIZE);
    }
  }, {
    key: 'handleZoomOutButtonClick',
    value: function handleZoomOutButtonClick() {
      this.changeZoom(this.state.zoomLevel - _constants.ZOOM_BUTTON_INCREMENT_SIZE);
    }
  }, {
    key: 'handleCaptionMousewheel',
    value: function handleCaptionMousewheel(event) {
      event.stopPropagation();

      if (!this.caption) {
        return;
      }

      var _caption$getBoundingC = this.caption.getBoundingClientRect(),
          height = _caption$getBoundingC.height;

      var _caption = this.caption,
          scrollHeight = _caption.scrollHeight,
          scrollTop = _caption.scrollTop;

      if (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) {
        event.preventDefault();
      }
    }

    // Detach key and mouse input events

  }, {
    key: 'isAnimating',
    value: function isAnimating() {
      return this.state.shouldAnimate || this.state.isClosing;
    }

    // Check if image is loaded

  }, {
    key: 'isImageLoaded',
    value: function isImageLoaded(imageSrc) {
      return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
    }

    // Load image from src and call callback with image width and height on load

  }, {
    key: 'loadImage',
    value: function loadImage(srcType, imageSrc, done) {
      var _this12 = this;

      // Return the image info if it is already cached
      //console.log([srcType, imageSrc, done]);

      if (this.isImageLoaded(imageSrc)) {
        this.setTimeout(function () {
          done();
        }, 1);
        return;
      }

      var inMemoryImage = new global.Image();

      if (this.props.imageCrossOrigin) {
        inMemoryImage.crossOrigin = this.props.imageCrossOrigin;
      }

      inMemoryImage.onerror = function (errorEvent) {
        _this12.props.onImageLoadError(imageSrc, srcType, errorEvent);

        // failed to load so set the state loadErrorStatus
        _this12.setState(function (prevState) {
          return {
            loadErrorStatus: _extends({}, prevState.loadErrorStatus, _defineProperty({}, srcType, true))
          };
        });

        done(errorEvent);
      };

      inMemoryImage.onload = function () {
        //console.log("IMAGE LOADED?!?!?!??!!?!!?!??!?!?");
        //console.log({width: inMemoryImage.width, height: inMemoryImage.height});

        _this12.imageCache[imageSrc] = {
          loaded: true,
          width: inMemoryImage.width,
          height: inMemoryImage.height
        };

        done();
      };

      inMemoryImage.src = imageSrc;
    }

    // Load all images and their thumbnails

  }, {
    key: 'loadAllImages',
    value: function loadAllImages() {
      var _this13 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      //console.log('LOAD ALL IMAGES!!!');
      var generateLoadDoneCallback = function generateLoadDoneCallback(srcType, imageSrc) {
        return function (err) {
          // Give up showing image on error
          if (err) {
            return;
          }

          // Don't rerender if the src is not the same as when the load started
          // or if the component has unmounted
          if (_this13.props[srcType] !== imageSrc || _this13.didUnmount) {
            return;
          }

          // Force rerender with the new image
          _this13.forceUpdate();
        };
      };

      // Load the images
      this.getSrcTypes().forEach(function (srcType) {
        var type = srcType.name;
        //console.log(type);

        // there is no error when we try to load it initially
        if (props[type] && _this13.state.loadErrorStatus[type]) {
          _this13.setState(function (prevState) {
            return {
              loadErrorStatus: _extends({}, prevState.loadErrorStatus, _defineProperty({}, type, false))
            };
          });
        }

        // Load unloaded images
        if (props[type] && !_this13.isImageLoaded(props[type])) {
          _this13.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
        }
      });
    }

    // Request that the lightbox be closed

  }, {
    key: 'requestClose',
    value: function requestClose(event) {
      var _this14 = this;

      // Call the parent close request
      var closeLightbox = function closeLightbox() {
        return _this14.props.onCloseRequest(event);
      };

      if (this.props.animationDisabled || event.type === 'keydown' && !this.props.animationOnKeyInput) {
        // No animation
        closeLightbox();
        return;
      }

      // With animation
      // Start closing animation
      this.setState({ isClosing: true });

      // Perform the actual closing at the end of the animation
      this.setTimeout(closeLightbox, this.props.animationDuration);
    }
  }, {
    key: 'requestMove',
    value: function requestMove(direction, event) {
      var _this15 = this;

      // Reset the zoom level on image move
      var nextState = {
        zoomLevel: _constants.MIN_ZOOM_LEVEL,
        offsetX: 0,
        offsetY: 0
      };

      // Enable animated states
      if (!this.props.animationDisabled && (!this.keyPressed || this.props.animationOnKeyInput)) {
        nextState.shouldAnimate = true;
        this.setTimeout(function () {
          return _this15.setState({ shouldAnimate: false });
        }, this.props.animationDuration);
      }
      this.keyPressed = false;

      this.moveRequested = true;

      if (direction === 'prev') {
        this.keyCounter -= 1;
        this.setState(nextState);
        this.props.onMovePrevRequest(event);
      } else {
        this.keyCounter += 1;
        this.setState(nextState);
        this.props.onMoveNextRequest(event);
      }
    }

    // Request to transition to the next image

  }, {
    key: 'requestMoveNext',
    value: function requestMoveNext(event) {
      this.requestMove('next', event);
    }

    // Request to transition to the previous image

  }, {
    key: 'requestMovePrev',
    value: function requestMovePrev(event) {
      this.requestMove('prev', event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this16 = this;

      var _props = this.props,
          animationDisabled = _props.animationDisabled,
          animationDuration = _props.animationDuration,
          clickOutsideToClose = _props.clickOutsideToClose,
          discourageDownloads = _props.discourageDownloads,
          enableZoom = _props.enableZoom,
          imageTitle = _props.imageTitle,
          nextSrc = _props.nextSrc,
          prevSrc = _props.prevSrc,
          toolbarButtons = _props.toolbarButtons,
          reactModalStyle = _props.reactModalStyle,
          onAfterOpen = _props.onAfterOpen,
          imageCrossOrigin = _props.imageCrossOrigin,
          reactModalProps = _props.reactModalProps;
      var _state = this.state,
          zoomLevel = _state.zoomLevel,
          offsetX = _state.offsetX,
          offsetY = _state.offsetY,
          isClosing = _state.isClosing,
          loadErrorStatus = _state.loadErrorStatus;


      var boxSize = this.getLightboxRect();
      var transitionStyle = {};

      // Transition settings for sliding animations
      if (!animationDisabled && this.isAnimating()) {
        transitionStyle = _extends({}, transitionStyle, {
          transition: 'transform ' + animationDuration + 'ms'
        });
      }

      var classes = this.props.classes;

      // Key endings to differentiate between images with the same src
      var keyEndings = {};
      this.getSrcTypes().forEach(function (_ref13) {
        var name = _ref13.name,
            keyEnding = _ref13.keyEnding;

        keyEndings[name] = keyEnding;
      });

      var images = [];

      var addImage = function addImage(srcType, imageClass, transforms) {
        // Ignore types that have no source defined for their full size image
        if (!_this16.props[srcType]) {
          return;
        }

        var bestImageInfo = _this16.getBestImageForType(srcType);

        //console.log(bestImageInfo);

        var imageStyle = _extends({}, transitionStyle, SlideshowLightbox.getTransform(_extends({}, transforms, bestImageInfo)));

        if (zoomLevel > _constants.MIN_ZOOM_LEVEL) {
          imageStyle.cursor = 'move';
        }

        if (bestImageInfo === null) {
          //&& not in error state) {
          // render loading state?
          images.push('<h1>Loading....!</h1>');
          return;
        }

        var imageSrc = bestImageInfo.src;
        if (discourageDownloads) {} else {
          images.push(_react2.default.createElement('img', {
            //{...(imageCrossOrigin ? { crossOrigin: imageCrossOrigin } : {})}
            className: (0, _classnames2.default)(imageClass, classes.image)
            //onDoubleClick={this.handleImageDoubleClick}
            //onWheel={this.handleImageMouseWheel}
            , onDragStart: function onDragStart(e) {
              return e.preventDefault();
            },
            style: imageStyle,
            src: imageSrc,
            key: imageSrc + keyEndings[srcType],
            alt: typeof imageTitle === 'string' ? imageTitle : (0, _utils.translate)('Image'),
            draggable: false
          }));
        }
      };

      var zoomMultiplier = this.getZoomMultiplier();

      // Add Images...
      addImage('nextSrc', (0, _classnames2.default)('ril-image-next', classes.imageNext), {
        x: boxSize.width
      });
      // Main Image
      addImage('mainSrc', (0, _classnames2.default)('ril-image-current'), {
        x: -1 * offsetX,
        y: -1 * offsetY,
        zoom: zoomMultiplier
      });
      // Previous Image (displayed on the left)
      addImage('prevSrc', (0, _classnames2.default)('ril-image-prev', classes.imagePrev), {
        x: -1 * boxSize.width
      });

      return _react2.default.createElement(
        'div',
        null,
        'Inner SlideshowLightbox',
        _react2.default.createElement(
          _Dialog2.default,
          {
            open: true,
            onExit: clickOutsideToClose ? this.requestClose : undefined,
            fullScreen: true,
            fullWidth: true
          },
          _react2.default.createElement(
            'div',
            { // eslint-disable-line jsx-a11y/no-static-element-interactions
              // Floating modal with closing animations
              className: (0, _classnames2.default)('ril-outer', classes.outer, classes.outerAnimating, this.props.wrapperClassName),
              onWheel: this.handleOuterMousewheel,
              onMouseMove: this.handleMouseMove,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart,
              onTouchMove: this.handleTouchMove,
              tabIndex: '-1' // Enables key handlers on div
              , onKeyDown: this.handleKeyInput,
              onKeyUp: this.handleKeyInput
            },
            _react2.default.createElement(
              'div',
              {
                className: (0, _classnames2.default)('ril-inner', classes.inner)
              },
              images
            ),
            prevSrc && _react2.default.createElement('a', { // Move to previous image button
              type: 'button',
              className: (0, _classnames2.default)('ril-prev-button', classes.navButtons, classes.navButtonPrev),
              key: 'prev',
              'aria-label': this.props.prevLabel,

              onClick: !this.isAnimating() ? this.requestMovePrev : undefined // Ignore clicks during animation
            }),
            nextSrc && _react2.default.createElement('a', { // Move to previous image button
              type: 'button',
              className: (0, _classnames2.default)('ril-next-button', classes.navButtons, classes.navButtonNext),
              key: 'next',
              'aria-label': this.props.nextLabel,
              onClick: !this.isAnimating() ? this.requestMoveNext : undefined // Ignore clicks during animation
            }),
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)('ril-toolbar', classes.toolbar) },
              _react2.default.createElement(
                'ul',
                { className: (0, _classnames2.default)('ril-toolbar-left', classes.toolbarSide, classes.toolbarLeftSide) },
                _react2.default.createElement(
                  'li',
                  { className: (0, _classnames2.default)('ril-toolbar__item', classes.toolbarItem) },
                  _react2.default.createElement(
                    'span',
                    { className: (0, _classnames2.default)('ril-toolbar__item__child', classes.toolbarItemChild) },
                    'Image Gallery'
                  )
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: (0, _classnames2.default)('ril-toolbar-left', classes.toolbarSide, classes.toolbarLeftSide) },
                _react2.default.createElement(
                  'li',
                  { className: (0, _classnames2.default)('ril-toolbar__item', classes.toolbarItem) },
                  _react2.default.createElement('a', {
                    className: (0, _classnames2.default)('ril-toolbar__item__child', classes.builtinButton, classes.toolbarItemChild, classes.closeButton),
                    onClick: !this.isAnimating() ? this.requestClose : undefined // Ignore clicks during animation
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SlideshowLightbox;
}(_react2.default.Component);

SlideshowLightbox.propTypes = {
  //-----------------------------
  // Image sources
  //-----------------------------

  // Main display image url
  mainSrc: _propTypes2.default.string.isRequired, // eslint-disable-line react/no-unused-prop-types

  // Previous display image url (displayed to the left)
  // If left undefined, movePrev actions will not be performed, and the button not displayed
  prevSrc: _propTypes2.default.string,

  // Next display image url (displayed to the right)
  // If left undefined, moveNext actions will not be performed, and the button not displayed
  nextSrc: _propTypes2.default.string
};

SlideshowLightbox.defaultProps = {
  imageTitle: null,
  imageCaption: null,
  toolbarButtons: null,
  reactModalProps: {},
  animationDisabled: false,
  animationDuration: 300,
  animationOnKeyInput: false,
  clickOutsideToClose: true,
  closeLabel: 'Close lightbox',
  discourageDownloads: false,
  enableZoom: true,
  imagePadding: 10,
  imageCrossOrigin: null,
  keyRepeatKeyupBonus: 40,
  keyRepeatLimit: 180,
  mainSrcThumbnail: null,
  nextLabel: 'Next image',
  nextSrc: null,
  nextSrcThumbnail: null,
  onAfterOpen: function onAfterOpen() {},
  onImageLoadError: function onImageLoadError() {},
  onMoveNextRequest: function onMoveNextRequest() {},
  onMovePrevRequest: function onMovePrevRequest() {},
  prevLabel: 'Previous image',
  prevSrc: null,
  prevSrcThumbnail: null,
  reactModalStyle: {},
  wrapperClassName: '',
  zoomInLabel: 'Zoom in',
  zoomOutLabel: 'Zoom out',
  imageLoadErrorMessage: 'This image failed to load'
};

exports.default = (0, _styles.withStyles)(styles)(SlideshowLightbox);