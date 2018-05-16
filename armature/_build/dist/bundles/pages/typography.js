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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 50 */
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
          'p',
          { style: { color: 'blue' } },
          'Typography'
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);
//export default withRoot(withStyles({})(Index));


exports.default = (0, _withRedux2.default)(_store.initStore, null, {})((0, _withRoot2.default)((0, _styles.withStyles)({})(Index)));

/***/ })
/******/ ]);