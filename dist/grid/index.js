'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.Grid = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid2 = require('material-ui/Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

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

    typeContainer: {},
    typeItem: {}
  };
};

function _Grid(_ref) {
  var classes = _ref.classes,
      theme = _ref.theme,
      className = _ref.className,
      children = _ref.children,
      fluid = _ref.fluid,
      rest = _objectWithoutProperties(_ref, ['classes', 'theme', 'className', 'children', 'fluid']);

  var containerClass = classes.legacyContainer;
  if (fluid) {
    containerClass = classes.fluidContainer;
  }

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(containerClass, className) }, rest),
    children
  );
}
// prop definitions
_Grid.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  classes: _propTypes2.default.object,
  fluid: _propTypes2.default.bool
};

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
_Row.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  classes: _propTypes2.default.object
};

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

_Col.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  classes: _propTypes2.default.object
};

var Row = (0, _styles.withStyles)(styles, { withTheme: true })(_Row);
var Col = (0, _styles.withStyles)(styles, { withTheme: true })(_Col);
var Grid = (0, _styles.withStyles)(styles, { withTheme: true })(_Grid);

exports.Grid = Grid;
exports.Row = Row;
exports.Col = Col;