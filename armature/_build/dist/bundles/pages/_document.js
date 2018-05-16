module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageContext;

var _jss = __webpack_require__(11);

var _styles = __webpack_require__(1);

var _theme = __webpack_require__(12);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPageContext() {
  return {
    theme: _theme2.default,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry(),
    // The standard class name generator.
    generateClassName: (0, _styles.createGenerateClassName)()
  };
} // Material-UI context for use with JssProvider for SSR
// Note: if you use `npm link <localpath>` => className missmatch thing. Use `npm install <localpath>`

/* eslint-disable no-underscore-dangle */

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).

  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side. Next.js leverages this
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = __webpack_require__(1);

var _colors = __webpack_require__(13);

// Define Theme properties
var muiTheme = (0, _styles.createMuiTheme)({
  typography: {
    fontFamily: '"Bryant", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '1.25rem'
    }
  },
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: _colors.blue,
    accent: _colors.pink,
    secondary: _colors.pink,
    error: _colors.red
  },

  // Non Material UI variables
  globalAppBar: {
    title: {
      color: '#dfdfdf',
      '&:hover': {
        textDecoration: 'none',
        color: '#ffffff'
      }
    },
    subtitle: {
      color: _colors.blue[500]
    }
  },
  appBarHeight: { 'default': 60, 'sm': 50 }, // TODO: Do we need/want different heights?

  // Venue Map Theme
  venues: {
    'gallery': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_GALLERY_fd0595.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_GALLERY_fd0595.png',
      'default_color': 'fd0595',
      'premium_color': 'fd0595'
    },
    'business': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_BUSINESS_607d8b.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_BUSINESS_607d8b.png',
      'default_color': '607d8b',
      'premium_color': '607d8b'
    },
    'institution': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_INSTITUTION_3f51b5.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_INSTITUTION_3f51b5.png',
      'default_color': '3f51b5',
      'premium_color': '3f51b5'
    },
    'popup': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_POPUP_673ab7.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_POPUP_673ab7.png',
      'default_color': '673ab7',
      'premium_color': '673ab7'
    },
    'public': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_PUBLIC_009688.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_PUBLIC_009688.png',
      'default_color': '009688',
      'premium_color': '009688'
    },
    'studios': {
      'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_STUDIOS_9c27b0.png',
      'premium_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_STUDIOS_9c27b0.png',
      'default_color': '9c27b0',
      'premium_color': '9c27b0'
    },

    'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_DEFAULT_9e9e9e.png',
    //'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_GALLERY_fd0595.png',
    'default_color': '9e9e9e'
  }
});

exports.default = muiTheme;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// MPLSART 2017 theme - Generated via http://mcg.mbitson.com/
// Base color #039be5
var blue = exports.blue = {
    50: '#e1f3fc',
    100: '#b3e1f7',
    200: '#81cdf2',
    300: '#4fb9ed',
    400: '#29aae9',
    500: '#039be5',
    600: '#0393e2',
    700: '#0289de',
    800: '#027fda',
    900: '#016dd3',
    A100: '#fbfdff',
    A200: '#c8e1ff',
    A400: '#95c5ff',
    A700: '#7bb8ff',
    'contrastDefaultColor': 'light'
};

// Base color #fd0595
var pink = exports.pink = {
    50: '#ffe1f2',
    100: '#feb4df',
    200: '#fe82ca',
    300: '#fe50b5',
    400: '#fd2ba5',
    500: '#fd0595',
    600: '#fd048d',
    700: '#fc0482',
    800: '#fc0378',
    900: '#fc0167',
    A100: '#ffffff',
    A200: '#ffeff4',
    A400: '#ffbcd3',
    A700: '#ffa2c2',
    'contrastDefaultColor': 'light'
};

// Base color #e06666
var red = exports.red = {
    50: '#ffffff',
    100: '#ffffff',
    200: '#f6d4d4',
    300: '#ea9999',
    400: '#e57f7f',
    500: '#e06666',
    600: '#db4d4d',
    700: '#d63333',
    800: '#c32727',
    900: '#a92222',
    A100: '#ffffff',
    A200: '#fee1e1',
    A400: '#f38686',
    A700: '#e87777',
    'contrastDefaultColor': 'dark'
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(44);

var _document2 = _interopRequireDefault(_document);

var _JssProvider = __webpack_require__(45);

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _server = __webpack_require__(46);

var _server2 = _interopRequireDefault(_server);

var _context = __webpack_require__(10);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Note: This is basically stock version of https://github.com/mui-org/material-ui/blob/v1-beta/examples/nextjs/pages/_document.js


var MyDocument = function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: 'render',
    value: function render() {
      var pageContext = this.props.pageContext;


      return _react2.default.createElement(
        'html',
        { lang: 'en', dir: 'ltr' },
        _react2.default.createElement(
          _document.Head,
          null,
          _react2.default.createElement(
            'title',
            null,
            'MPLSART.COM | Style Guide'
          ),
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement('meta', {
            name: 'viewport',
            content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height'
          }),
          _react2.default.createElement('meta', { name: 'theme-color', content: pageContext.theme.palette.primary[500] }),
          _react2.default.createElement('link', { href: 'https://storage.googleapis.com/cdn.mplsart.com/assets/fonts/Bryant/WOFF/Bryant.css', rel: 'stylesheet', type: 'text/css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(_document.Main, null),
          _react2.default.createElement(_document.NextScript, null)
        )
      );
    }
  }]);

  return MyDocument;
}(_document2.default);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  var pageContext = (0, _context2.default)();

  var page = ctx.renderPage(function (Component) {
    return function (props) {
      return _react2.default.createElement(
        _JssProvider2.default,
        {
          registry: pageContext.sheetsRegistry,
          generateClassName: pageContext.generateClassName
        },
        _react2.default.createElement(Component, _extends({ pageContext: pageContext }, props))
      );
    };
  });

  return _extends({}, page, {
    pageContext: pageContext,
    styles: _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement('style', {
        id: 'jss-server-side'
        // eslint-disable-next-line react/no-danger
        , dangerouslySetInnerHTML: { __html: pageContext.sheetsRegistry.toString() }
      }),
      (0, _server2.default)() || null
    )
  });
};

exports.default = MyDocument;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });