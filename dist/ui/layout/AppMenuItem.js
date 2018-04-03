'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // A Wrapper class for menu items


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _List = require('material-ui/List');

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

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

AppMenuItem.propTypes = {
  classes: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = (0, _styles.withStyles)(styles)(AppMenuItem);