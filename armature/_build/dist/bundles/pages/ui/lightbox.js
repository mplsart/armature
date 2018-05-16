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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.Grid = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid2 = __webpack_require__(29);

var _Grid3 = _interopRequireDefault(_Grid2);

var _styles = __webpack_require__(1);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _legacyContainer;

  return {
    fluidContainer: {
      width: '100%',
      flexGrow: 1
    },
    legacyContainer: (_legacyContainer = {
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%', // xs,sm
      flexGrow: 1,
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit

    }, _defineProperty(_legacyContainer, theme.breakpoints.only('xs'), {
      width: '100%'
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('sm'), {
      width: '100%'
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('md'), {
      width: theme.breakpoints.width('md')
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('lg'), {
      width: theme.breakpoints.width('lg')
    }), _defineProperty(_legacyContainer, theme.breakpoints.only('xl'), { // force width of lg
      width: theme.breakpoints.width('lg')
    }), _legacyContainer),
    alignRight: { marginRight: 0 },
    alignLeft: { marginLeft: 0 },
    typeContainer: {},
    typeItem: {}
  };
};

function _Grid(_ref) {
  var classes = _ref.classes,
      align = _ref.align,
      theme = _ref.theme,
      className = _ref.className,
      children = _ref.children,
      fluid = _ref.fluid,
      rest = _objectWithoutProperties(_ref, ['classes', 'align', 'theme', 'className', 'children', 'fluid']);

  var classNamesX = [className];

  if (fluid) {
    classNamesX.push(classes.fluidContainer);
  } else {
    classNamesX.push(classes.legacyContainer);

    if (align) {
      if (align == 'right') {
        classNamesX.push(classes.alignRight);
      } else if (align == 'left') {
        classNamesX.push(classes.alignLeft);
      }
    }
  }
  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(classNamesX) }, rest),
    children
  );
}
// prop definitions


function _Row(_ref2) {
  var classes = _ref2.classes,
      theme = _ref2.theme,
      className = _ref2.className,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['classes', 'theme', 'className', 'children']);

  return _react2.default.createElement(
    _Grid3.default,
    _extends({ spacing: Number(theme.spacing.unit * 2), container: true, className: (0, _classnames2.default)(classes.typeContainer, className) }, rest),
    children
  );
}
// prop definitions


function _Col(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ['classes', 'className', 'children', 'theme']);

  return _react2.default.createElement(
    _Grid3.default,
    _extends({ item: true }, rest, { className: (0, _classnames2.default)(classes.typeItem, className) }),
    children
  );
}

var Row = (0, _styles.withStyles)(styles, { withTheme: true })(_Row);
var Col = (0, _styles.withStyles)(styles, { withTheme: true })(_Col);
var Grid = (0, _styles.withStyles)(styles, { withTheme: true })(_Grid);

exports.Grid = Grid;
exports.Row = Row;
exports.Col = Col;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PageBase = __webpack_require__(15);

var _PageBase2 = _interopRequireDefault(_PageBase);

var _AppShell = __webpack_require__(17);

var _AppShell2 = _interopRequireDefault(_AppShell);

var _link = __webpack_require__(4);

var _link2 = _interopRequireDefault(_link);

var _grid = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {};

var PageBase = function (_React$Component) {
  _inherits(PageBase, _React$Component);

  function PageBase() {
    _classCallCheck(this, PageBase);

    return _possibleConstructorReturn(this, (PageBase.__proto__ || Object.getPrototypeOf(PageBase)).apply(this, arguments));
  }

  _createClass(PageBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          activeMenuItem = _props.activeMenuItem,
          theme = _props.theme,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['classes', 'activeMenuItem', 'theme', 'children']);

      return _react2.default.createElement(
        _AppShell2.default,
        null,
        _react2.default.createElement(
          _PageBase2.default,
          rest,
          _react2.default.createElement(
            _grid.Grid,
            null,
            _react2.default.createElement(
              _grid.Row,
              null,
              _react2.default.createElement(
                _grid.Col,
                { xs: 12 },
                children,
                '(',
                '/armature',
                ')',
                _react2.default.createElement(
                  _link2.default,
                  { href: '/', as: '/armature/' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'home'
                  )
                ),
                ' |',
                _react2.default.createElement(
                  _link2.default,
                  { href: '/armature/ui/popovers', as: '/armature/ui/popovers' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'popovers'
                  )
                ),
                ' |',
                _react2.default.createElement(
                  _link2.default,
                  { href: '/ui/buttons', as: '/armature/ui/buttons' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'buttons'
                  )
                ),
                ' |',
                _react2.default.createElement(
                  _link2.default,
                  { href: '/typography', as: '/armature/typography' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'typography'
                  )
                ),
                ' |',
                _react2.default.createElement(
                  _link2.default,
                  { href: '/ui/lightbox', as: '/armature/ui/lightbox' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'lightbox'
                  )
                ),
                ' |',
                _react2.default.createElement(
                  _link2.default,
                  { href: '/ui/inputs/autocomplete', as: '/armature/ui/inputs/autocomplete' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'autocomplete'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
              )
            )
          )
        )
      );
    }
  }]);

  return PageBase;
}(_react2.default.Component);

exports.default = PageBase;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _redux = __webpack_require__(8);

var _redux2 = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Base Wrapper for Pages


var PageBase = function (_React$Component) {
  _inherits(PageBase, _React$Component);

  function PageBase() {
    _classCallCheck(this, PageBase);

    return _possibleConstructorReturn(this, (PageBase.__proto__ || Object.getPrototypeOf(PageBase)).apply(this, arguments));
  }

  _createClass(PageBase, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.loadPage();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        null,
        children
      );
    }
  }]);

  return PageBase;
}(_react2.default.Component);

function mapStateToProps() /* state */{
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadPage: (0, _redux.bindActionCreators)(function () {
      if (!ownProps.pageAction) {
        return { type: 'UNDEFINED_PAGE_LOAD' };
      }

      // Duck Type - action with args
      if (Array.isArray(ownProps.pageAction) && ownProps.pageAction.length === 2) {
        return (0, _redux2.actionFactory)(ownProps.pageAction[0].REQUEST, _extends({}, ownProps.pageAction[1]));
      }

      // Duck Type - Async Request
      if (ownProps.pageAction.REQUEST) {
        // If Page Actio is a asyncRequest Type
        return (0, _redux2.actionFactory)(ownProps.pageAction.REQUEST, {});
      }

      console.error('Unknown pageAction:');
      console.error(ownProps.pageAction.REQUEST);
    }, dispatch)
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageBase);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createAsyncActionTypes = createAsyncActionTypes;
exports.actionFactory = actionFactory;
exports.asyncCallMapper = asyncCallMapper;
exports.resourceIndex = resourceIndex;
exports.getResourcesFromState = getResourcesFromState;
exports.isPageInState = isPageInState;
// Framework Redux Helpers
//import {call, put} from 'redux-saga/effects';

var REQUEST = 'REQUEST';
var SUCCESS = 'SUCCESS';
var FAILURE = 'FAILURE';

function createAsyncActionTypes(base) {
  // Helper to create Actions for async operations for easy access
  // returns an object with props like {REQUEST: 'REQUEST', SUCCESS: 'SUCCESS', FAILURE: 'FAILURE'}
  return [REQUEST, SUCCESS, FAILURE].reduce(function (acc, type) {
    acc[type] = base + '_' + type;
    return acc;
  }, {});
}

function actionFactory(type) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Helper to construct a redux action
  return _extends({ type: type }, payload);
}

function asyncCallMapper(actionGroup) {
  // Helper to map return arguments from async calls to hydrated actions to be handled by pagination, etc
  // actionGroup is a object created by createRequestTypes
  return {
    actionGroup: actionGroup, // for debugging purposes
    request: function request(async_args) {
      return actionFactory(actionGroup[REQUEST], _extends({}, async_args));
    },
    success: function success(response, async_args) {
      return actionFactory(actionGroup[SUCCESS], _extends({ response: response }, async_args));
    },
    failure: function failure(error, async_args) {
      return actionFactory(actionGroup[FAILURE], _extends({ error: error }, async_args));
    }
  };
}

/*
export function* asycFetch(asyncActionMap, apiFunction, ...args) {
  // Generic subroutine to async fetch data

  // Type Check args
  if (!apiFunction || typeof apiFunction !== 'function') {
    throw new Error('api function is undefined or not of type function.');
  }

  // TODO: Type Check asyncActionMap
  yield put( asyncActionMap.request(...args));
  const results = yield call(apiFunction, ...args);
  const {response, error} = results;

  if(response) {
    yield put(asyncActionMap.success(response, ...args) );
  }
  else {
    yield put(asyncActionMap.failure(error, ...args));
  }
}
*/

function resourceIndex() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  // A reducer to map resource_ids to resources so we have a single state for them

  // duck type a async action success
  if (action.type && action.type.indexOf('SUCCESS') !== -1 && action.response && action.response.results) {

    // This is likely a async response
    var resources = action.response.results;
    if (!Array.isArray(resources)) {
      resources = [resources];
    }

    var new_resources = {};
    resources.forEach(function (resource) {
      if (resource.resource_id) {
        new_resources[resource.resource_id] = resource;
        return;
      }

      console.debug('Resource did not have resource_id property. Is verbose=true?');
    });

    return Object.assign({}, state, new_resources);
  }

  return state;
}

function getResourcesFromState(resource_ids, state) {
  return resource_ids.map(function (resource_id) {
    return state.resourceIndex[resource_id];
  });
}

function isPageInState(state, index_name, index_subname, next_cursor) {
  var force_refresh = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // TODO: This works for pagination, but not for individual entities...
  if (force_refresh) {
    return false;
  }

  // TODO: ATM, I don't have another page to switch to
  var next_cursor_index = next_cursor || 'start';
  if (state[index_name] && state[index_name][index_subname] && state[index_name][index_subname].cursors && state[index_name][index_subname].cursors[next_cursor_index]) {
    return true;
  }
  return false;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppShell = __webpack_require__(18);

var _AppShell2 = _interopRequireDefault(_AppShell);

var _MainMenuContent = __webpack_require__(21);

var _MainMenuContent2 = _interopRequireDefault(_MainMenuContent);

var _AppBar = __webpack_require__(23);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import {Grid, Row, Col} from 'armature/dist/grid';


var PageBase = function (_React$Component) {
  _inherits(PageBase, _React$Component);

  function PageBase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageBase.__proto__ || Object.getPrototypeOf(PageBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = { menuActive: false }, _this.handleSiteMenuToggle = function (force) {
      var isMenuActive = void 0;
      if (force != undefined) {
        isMenuActive = force;
      } else {
        isMenuActive = !_this.state.menuActive;
      }
      _this.setState({ menuActive: isMenuActive });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // TODO: Eventually, drive this off the redux store appShellState

  _createClass(PageBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeMenuItem = _props.activeMenuItem,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['activeMenuItem', 'children']);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _AppShell2.default,
          {
            handleSiteMenuToggle: this.handleSiteMenuToggle.bind(this),
            appBarComponent: _AppBar2.default,
            menuContentComponent: _MainMenuContent2.default
          },
          children
        )
      );
    }
  }]);

  return PageBase;
}(_react2.default.Component);

exports.default = PageBase;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppMenu = __webpack_require__(19);

var _AppMenu2 = _interopRequireDefault(_AppMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppShell = function (_React$Component) {
  _inherits(AppShell, _React$Component);

  function AppShell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppShell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppShell.__proto__ || Object.getPrototypeOf(AppShell)).call.apply(_ref, [this].concat(args))), _this), _this.state = { menuActive: false }, _this.handleSiteMenuToggle = function (_ref2) {
      var force = _ref2.force,
          rest = _objectWithoutProperties(_ref2, ['force']);

      var menuActiveNext = void 0;
      if (force !== undefined) {
        menuActiveNext = force;
      } else {
        menuActiveNext = !_this.state.menuActive;
      }
      _this.setState({ menuActive: menuActiveNext });

      // Callback?
      _this.props.handleSiteMenuToggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // TODO: Eventually, drive this off the redux store

  _createClass(AppShell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          appBarComponent = _props.appBarComponent,
          menuContentComponent = _props.menuContentComponent,
          menuActive = _props.menuActive;

      // TODO: Create a constructor to house the initial state of this.props.menuActive

      var appBar = void 0,
          mainMenu = void 0;

      if (appBarComponent) {
        appBar = _react2.default.createElement(this.props.appBarComponent, { menuActive: this.state.menuActive, handleMenuToggle: this.handleSiteMenuToggle.bind(this) });
      }

      if (menuContentComponent) {
        var menuContent = _react2.default.createElement(this.props.menuContentComponent, { menuActive: this.state.menuActive, handleMenuToggle: this.handleSiteMenuToggle.bind(this) });
        mainMenu = _react2.default.createElement(_AppMenu2.default, { contentComponent: menuContent, menuActive: this.state.menuActive, handleMenuToggle: this.handleSiteMenuToggle.bind(this) });
      }

      return _react2.default.createElement(
        'div',
        null,
        appBar,
        mainMenu,
        children
      );
    }
  }]);

  return AppShell;
}(_react2.default.Component);

exports.default = AppShell;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(1);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Drawer = __webpack_require__(20);

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Maybe this should be main menu container?

/* eslint-disable flowtype/require-valid-file-annotation */

// TODO: Run this off of the theme
var drawerWidth = 300;

// TODO: Eval what of these is even being used...
var styles = function styles(theme) {
  return {
    drawerPaper: {
      backgroundColor: '#000',
      position: 'relative',
      height: '100%',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      flex: 'none'
    },
    drawerInner: {
      // Make the items inside not wrap when transitioning:
      width: drawerWidth,
      padding: theme.spacing.unit * 2,
      paddingTop: 0
    },
    modal: _defineProperty({
      top: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      top: theme.appBarHeight.default
    }),
    modalBackdrop: _defineProperty({
      top: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      top: theme.appBarHeight.default
    })
  };
};

var AppMenu = function AppMenu(_ref) {
  var classes = _ref.classes,
      contentComponent = _ref.contentComponent,
      handleMenuToggle = _ref.handleMenuToggle,
      menuActive = _ref.menuActive;

  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      'div',
      { className: classes.appFrame },
      _react2.default.createElement(
        _Drawer2.default,
        {
          ModalProps: {
            keepMounted: true, // Better open performance on mobile.
            BackdropProps: { className: classes.modalBackdrop }
          },
          classes: {
            paper: (0, _classnames2.default)(classes.drawerPaper),
            modal: (0, _classnames2.default)(classes.modal)
          },
          open: menuActive,
          onClose: handleMenuToggle
        },
        _react2.default.createElement(
          'div',
          { className: classes.drawerInner },
          contentComponent
        )
      )
    )
  );
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(AppMenu);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(1);

var _List = __webpack_require__(5);

var _List2 = _interopRequireDefault(_List);

var _Typography = __webpack_require__(6);

var _Typography2 = _interopRequireDefault(_Typography);

var _link = __webpack_require__(4);

var _link2 = _interopRequireDefault(_link);

var _AppMenuItem = __webpack_require__(22);

var _AppMenuItem2 = _interopRequireDefault(_AppMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    menuText: {
      color: '#595959',
      fontSize: 14,
      padding: 12,
      lineHeight: '1.5em',
      fontSmoothing: 'none'
    }
  };
};

// https://github.com/zeit/next.js/blob/master/examples/with-redux/pages/index.js
var MenuLink = function MenuLink(_ref) {
  var href = _ref.href,
      as = _ref.as,
      rest = _objectWithoutProperties(_ref, ['href', 'as']);

  return _react2.default.createElement(
    _link2.default,
    { href: href, as: as },
    _react2.default.createElement(_AppMenuItem2.default, _extends({ href: as }, rest, { component: 'a' }))
  );
};

var AdminMenuNodes = function (_React$Component) {
  _inherits(AdminMenuNodes, _React$Component);

  function AdminMenuNodes() {
    _classCallCheck(this, AdminMenuNodes);

    return _possibleConstructorReturn(this, (AdminMenuNodes.__proto__ || Object.getPrototypeOf(AdminMenuNodes)).apply(this, arguments));
  }

  _createClass(AdminMenuNodes, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _List2.default,
          { className: classes.list },
          _react2.default.createElement(
            MenuLink,
            { as: '/about', href: '/about' },
            'YOLO'
          ),
          _react2.default.createElement(
            MenuLink,
            { as: '/', href: '/' },
            'about'
          ),
          _react2.default.createElement(
            MenuLink,
            { as: '/squirrel', href: 'squirrel' },
            'fubar'
          )
        ),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'body1', className: classes.menuText, noWrap: true },
          'Est. 2005',
          _react2.default.createElement('br', null),
          'We love art. We love you.',
          _react2.default.createElement('br', null),
          '\xA9 2018 MPLSART.COM'
        )
      );
    }
  }]);

  return AdminMenuNodes;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(AdminMenuNodes);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // A Wrapper class for menu items


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(1);

var _List = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    listItem: _extends({}, theme.typography.subheading, {
      color: theme.palette.primary[500],
      borderBottom: '1px solid ' + theme.palette.grey[800],
      fontSize: 18,
      padding: theme.spacing.unit,
      '&:hover': {
        color: theme.palette.primary[900],
        textDecoration: 'none'
      }
    })
  };
};

var AppMenuItem = function AppMenuItem(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['classes', 'children']);

  return _react2.default.createElement(
    _List.ListItem,
    _extends({ button: true, className: classes.listItem }, rest),
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(AppMenuItem);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppBar = __webpack_require__(24);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _styles = __webpack_require__(1);

var _CoolLink = __webpack_require__(30);

var _CoolLink2 = _interopRequireDefault(_CoolLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    title: theme.globalAppBar.title,
    subtitle: theme.globalAppBar.subtitle
  };
};

function titleClickHandler(e) {
  // Title Click Handler
  // - record analytic, tell menu to close, etc
  console.log('titleClickHandler!!!!');
  console.log(e);
}

var AppBar = function AppBar(_ref) {
  var classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ['classes']);

  var fluid = false; // TODO: Pass this in via PageWrapper level props?
  return _react2.default.createElement(_AppBar2.default, _extends({}, rest, {
    fluid: fluid,
    titleComponents: _react2.default.createElement(
      _CoolLink2.default,
      {
        href: '/',
        className: classes.title,
        onClick: titleClickHandler },
      'MPLSART',
      _react2.default.createElement('span', { className: classes.subtitle }),
      '.COM'
    )
  }));
};

exports.default = (0, _styles.withStyles)(styles)(AppBar);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(1);

var _AppBar = __webpack_require__(25);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(26);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(6);

var _Typography2 = _interopRequireDefault(_Typography);

var _AppBarMenuIcon = __webpack_require__(27);

var _AppBarMenuIcon2 = _interopRequireDefault(_AppBarMenuIcon);

var _grid = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    fixedRoot: _defineProperty({ // Placeholder that pushesdown the content
      width: '100%',
      paddingTop: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      paddingTop: theme.appBarHeight.default
    }),

    appBar: _defineProperty({
      backgroundColor: '#222', // TODO: Make theme variable?
      height: theme.appBarHeight.sm, // TODO: Make theme variable? appBarHeight
      minHeight: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      height: theme.appBarHeight.default,
      minHeight: theme.appBarHeight.default
    }),

    gridContainer: _defineProperty({}, theme.breakpoints.down('md'), {
      paddingLeft: 0 // Alternately, we could be fluid at medium
    }),
    toolBar: _defineProperty({
      minHeight: theme.appBarHeight.sm
    }, theme.breakpoints.up('sm'), {
      minHeight: theme.appBarHeight.default
    }),

    title: _defineProperty({
      flex: 1,
      fontSize: '1.75rem',
      lineHeight: '1.75rem',
      fontWeight: 100,
      textAlign: 'left',
      color: '#dfdfdf',
      marginTop: '2px' }, theme.breakpoints.down('sm'), {
      textAlign: 'center'
    }),
    loader: {
      height: '2px'
      //display:'none'
    }
  };
};

var AppBar = function (_React$Component) {
  _inherits(AppBar, _React$Component);

  function AppBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      open: false,
      menuActive: _this.props.menuActive
    }, _this.handleClick = function (e) {
      _this.props.handleMenuToggle(e);
    }, _this.handleRequestClose = function () {
      _this.props.handleMenuToggle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // This may not be used?


  _createClass(AppBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fluid = _props.fluid,
          menuActive = _props.menuActive,
          titleComponents = _props.titleComponents,
          rightComponents = _props.rightComponents;


      return _react2.default.createElement(
        'div',
        { className: classes.fixedRoot },
        _react2.default.createElement(
          _AppBar2.default,
          { position: 'fixed', className: classes.appBar },
          _react2.default.createElement(
            _grid.Grid,
            { fluid: fluid, className: classes.gridContainer },
            _react2.default.createElement(
              _Toolbar2.default,
              { className: classes.toolBar },
              _react2.default.createElement(_AppBarMenuIcon2.default, { active: menuActive, handleMenuToggle: this.handleClick.bind(this) }),
              _react2.default.createElement(
                _Typography2.default,
                { type: 'title', color: 'inherit', className: classes.title },
                titleComponents
              ),
              rightComponents
            )
          )
        )
      );
    }
  }]);

  return AppBar;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(AppBar);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(28);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = __webpack_require__(1);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _menuButtonJazzy;

  return {
    menuButtonJazzy: (_menuButtonJazzy = {
      transition: 'background-color 0.3s',
      marginLeft: -2 * theme.spacing.unit,
      marginRight: -2 * theme.spacing.unit,
      padding: 15,
      borderRadius: 0,
      height: theme.appBarHeight.sm

    }, _defineProperty(_menuButtonJazzy, theme.breakpoints.up('sm'), {
      marginLeft: -3 * theme.spacing.unit,
      marginRight: 2 * theme.spacing.unit,
      height: theme.appBarHeight.default,
      width: 60
    }), _defineProperty(_menuButtonJazzy, '&:hover', {
      backgroundColor: '#333'
    }), _menuButtonJazzy),
    menuButtonJazzyLink: {
      '&:hover': {
        textDecoration: 'none'
      }
    },
    menuButtonJazzyPatty: { //Span
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: 1,
      height: 3,
      width: 25,
      backgroundColor: 'white',
      content: '"."',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 500ms ease-in-out',
      '&.patty1': { top: 12 },
      '&.patty3': { top: -12 },
      '&.patty2.active': { backgroundColor: 'transparent' },
      '&.patty1.active, &.patty3.active': { backgroundColor: theme.palette.primary[500] },
      '&.patty1.active': { top: 4, transform: 'rotate(45deg)' },
      '&.patty3.active': { top: -2, transform: 'rotate(-45deg)' }
    }
  };
};

function HamburgerMenu(_ref) {
  var classes = _ref.classes,
      active = _ref.active,
      handleMenuToggle = _ref.handleMenuToggle;

  return _react2.default.createElement(
    _IconButton2.default,
    { onClick: handleMenuToggle, className: (0, _classnames2.default)(classes.menuButtonJazzy, active && 'active'), color: 'default', 'aria-label': 'Menu' },
    _react2.default.createElement(
      'a',
      { className: classes.menuButtonJazzyLink, id: 'side_nav_toggle', title: 'Show Menu' },
      _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.menuButtonJazzyPatty, 'patty1', active && 'active') },
        '\xA0'
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.menuButtonJazzyPatty, 'patty2', active && 'active') },
        '\xA0'
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(classes.menuButtonJazzyPatty, 'patty3', active && 'active') },
        '\xA0'
      )
    )
  );
}
exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(HamburgerMenu);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _link = __webpack_require__(4);

var _link2 = _interopRequireDefault(_link);

var _styles = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    variantDefault: {
      color: 'inherit'
    },
    variantPrimary: {
      color: theme.palette.primary[500]
    },
    variantAccent: {
      color: theme.palette.secondary.A400
    },
    variantButton: {
      '&:hover': {
        textDecoration: 'inherit'
      }
    }
  };
};

var OnClick = function (_React$Component) {
  _inherits(OnClick, _React$Component);

  function OnClick() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OnClick);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OnClick.__proto__ || Object.getPrototypeOf(OnClick)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (_this.props.onCustomClick) {
        _this.props.onCustomClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OnClick, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ComponentProp = _props.component,
          onCustomClick = _props.onCustomClick,
          props = _objectWithoutProperties(_props, ['component', 'onCustomClick']);

      return _react2.default.createElement(ComponentProp, _extends({}, props, { onClick: this.handleClick }));
    }
  }]);

  return OnClick;
}(_react2.default.Component);

function CoolLink(props, context) {
  var activeClassName = props.activeClassName,
      childrenProp = props.children,
      ComponentProp = props.component,
      classes = props.classes,
      classNameProp = props.className,
      variant = props.variant,
      href = props.href,
      onClick = props.onClick,
      prefetch = props.prefetch,
      other = _objectWithoutProperties(props, ['activeClassName', 'children', 'component', 'classes', 'className', 'variant', 'href', 'onClick', 'prefetch']);

  var ComponentRoot = void 0;
  var className = (0, _classnames2.default)(classes.root,
  //classes[`variant${capitalizeFirstLetter(variant)}`],
  classNameProp);
  var RootProps = void 0;
  var children = childrenProp;

  if (ComponentProp) {
    ComponentRoot = ComponentProp;
    RootProps = _extends({}, other, {
      className: className
    });
  } else if (href) {
    ComponentRoot = _link2.default;
    RootProps = {
      href: href,
      prefetch: prefetch,
      passHref: true
    };
    var active = false; //; context.url.pathname === href;
    children = _react2.default.createElement(
      OnClick,
      _extends({
        component: 'a',
        className: (0, _classnames2.default)(className, _defineProperty({}, activeClassName, active && activeClassName)),
        onCustomClick: onClick
      }, other),
      children
    );
  } else {
    ComponentRoot = 'a';
    RootProps = _extends({}, other, {
      className: className
    });
  }

  return _react2.default.createElement(
    ComponentRoot,
    RootProps,
    children
  );
}

CoolLink.defaultProps = {
  variant: 'default',
  activeClassName: 'active'
};

/*
CoolLink.contextTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
*/

exports.default = (0, _styles.withStyles)(styles)(CoolLink);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(1);

var _CssBaseline = __webpack_require__(32);

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _context = __webpack_require__(10);

var _context2 = _interopRequireDefault(_context);

var _GlobalStyles = __webpack_require__(33);

var _GlobalStyles2 = _interopRequireDefault(_GlobalStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withRoot(Component) {
  var WithRoot = function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props, context) {
      _classCallCheck(this, WithRoot);

      var _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props, context));

      _this.pageContext = null;


      _this.pageContext = _this.props.pageContext || (0, _context2.default)();
      return _this;
    }

    _createClass(WithRoot, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return _react2.default.createElement(
          _styles.MuiThemeProvider,
          {
            theme: this.pageContext.theme,
            sheetsManager: this.pageContext.sheetsManager
          },
          _react2.default.createElement(_CssBaseline2.default, null),
          _react2.default.createElement(_GlobalStyles2.default, null),
          _react2.default.createElement(Component, this.props)
        );
      }
    }]);

    return WithRoot;
  }(_react2.default.Component);

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

exports.default = withRoot;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var globalStyles = function globalStyles(theme) {
  return {
    '@global': {
      'body, html': {
        '-webkit-font-smoothing': 'unset',
        '-moz-osx-font-smoothing': 'unset'
      },
      'a': {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  };
};

var GlobalStyles = function (_React$Component) {
  _inherits(GlobalStyles, _React$Component);

  function GlobalStyles() {
    _classCallCheck(this, GlobalStyles);

    return _possibleConstructorReturn(this, (GlobalStyles.__proto__ || Object.getPrototypeOf(GlobalStyles)).apply(this, arguments));
  }

  _createClass(GlobalStyles, [{
    key: 'componentDidMount',

    // Double Check if this is in use for server rendering.
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return GlobalStyles;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(globalStyles)(GlobalStyles);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(35);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

// https://github.com/iliakan/detect-node
var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var getOrCreateStore = function getOrCreateStore(initStore, initialState) {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
};

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    // First argument is initStore, the rest are redux connect arguments and get passed
    var initStore = args[0],
        connectArgs = args.slice(1);


    var ComponentWithRedux = function ComponentWithRedux() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState;

      // Connect page to redux with connect arguments

      var ConnectedComponent = _reactRedux.connect.apply(null, connectArgs)(Component);

      // Wrap with redux Provider with store
      // Create connected page with initialProps
      return _react2.default.createElement(_reactRedux.Provider, { store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState) }, _react2.default.createElement(ConnectedComponent, initialProps));
    };

    ComponentWithRedux.getInitialProps = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var isServer, store, initialProps;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isServer = checkServer();
              store = getOrCreateStore(initStore);

              // Run page getInitialProps with store and isServer

              if (!Component.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return Component.getInitialProps(_extends({}, props, { isServer: isServer, store: store }));

            case 5:
              _context.t0 = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _context.t0 = {};

            case 9:
              initialProps = _context.t0;
              return _context.abrupt('return', {
                store: store,
                initialState: store.getState(),
                initialProps: initialProps
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return ComponentWithRedux;
  };
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

var _redux = __webpack_require__(8);

var _reduxDevtoolsExtension = __webpack_require__(37);

var _reduxThunk = __webpack_require__(38);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = exports.serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 1000);
  };
};

var addCount = exports.addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageBase = __webpack_require__(14);

var _PageBase2 = _interopRequireDefault(_PageBase);

var _styles = __webpack_require__(1);

var _withRoot = __webpack_require__(31);

var _withRoot2 = _interopRequireDefault(_withRoot);

var _withRedux = __webpack_require__(34);

var _withRedux2 = _interopRequireDefault(_withRedux);

var _store = __webpack_require__(36);

var _SlideshowLightboxDemo = __webpack_require__(66);

var _SlideshowLightboxDemo2 = _interopRequireDefault(_SlideshowLightboxDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _PageBase2.default,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Lightbox'
        ),
        _react2.default.createElement(
          'pre',
          null,
          'import SlideshowLightbox from \'armature/dist/ui/lightbox/SlideshowLightbox\';'
        ),
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement(_SlideshowLightboxDemo2.default, null)
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);
//export default withRoot(withStyles({})(Index));


exports.default = (0, _withRedux2.default)(_store.initStore, null, {})((0, _withRoot2.default)((0, _styles.withStyles)({})(Index)));

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SlideshowLightbox = __webpack_require__(67);

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
          animationOnKeyInput: true
        });
      }

      return _react2.default.createElement(
        'button',
        { onClick: this.openLightbox },
        'open'
      );
    }
  }]);

  return SlideshowLightboxDemo;
}(_react2.default.Component);

exports.default = SlideshowLightboxDemo;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(1);

var _Dialog = __webpack_require__(68);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _utils = __webpack_require__(69);

var _constants = __webpack_require__(70);

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

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIEVersion = getIEVersion;
exports.translate = translate;
exports.getWindowWidth = getWindowWidth;
exports.getWindowHeight = getWindowHeight;
/**
 * Get the version of Internet Explorer in use, or undefined
 *
 * @return {?number} ieVersion - IE version as an integer, or undefined if not IE
 */
function getIEVersion() {
  if (typeof global.window === 'undefined' || typeof global.window.navigator === 'undefined') {
    return undefined;
  }

  var match = global.window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
  return match ? parseInt(match[1], 10) : undefined;
}

/**
 * Placeholder for future translate functionality
 */
function translate(str) {
  var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!str) {
    return '';
  }

  var translated = str;
  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(function (placeholder) {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}

function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}

function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Min image zoom level
var MIN_ZOOM_LEVEL = exports.MIN_ZOOM_LEVEL = 0;

// Max image zoom level
var MAX_ZOOM_LEVEL = exports.MAX_ZOOM_LEVEL = 300;

// Size ratio between previous and next zoom levels
var ZOOM_RATIO = exports.ZOOM_RATIO = 1.007;

// How much to increase/decrease the zoom level when the zoom buttons are clicked
var ZOOM_BUTTON_INCREMENT_SIZE = exports.ZOOM_BUTTON_INCREMENT_SIZE = 100;

// Used to judge the amount of horizontal scroll needed to initiate a image move
var WHEEL_MOVE_X_THRESHOLD = exports.WHEEL_MOVE_X_THRESHOLD = 200;

// Used to judge the amount of vertical scroll needed to initiate a zoom action
var WHEEL_MOVE_Y_THRESHOLD = exports.WHEEL_MOVE_Y_THRESHOLD = 1;

var KEYS = exports.KEYS = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

// Actions
var ACTION_NONE = exports.ACTION_NONE = 0;
var ACTION_MOVE = exports.ACTION_MOVE = 1;
var ACTION_SWIPE = exports.ACTION_SWIPE = 2;
var ACTION_PINCH = exports.ACTION_PINCH = 3;
var ACTION_ROTATE = exports.ACTION_ROTATE = 4;

// Events source
var SOURCE_ANY = exports.SOURCE_ANY = 0;
var SOURCE_MOUSE = exports.SOURCE_MOUSE = 1;
var SOURCE_TOUCH = exports.SOURCE_TOUCH = 2;
var SOURCE_POINTER = exports.SOURCE_POINTER = 3;

// Minimal swipe distance
var MIN_SWIPE_DISTANCE = exports.MIN_SWIPE_DISTANCE = 200;

/***/ })
/******/ ]);