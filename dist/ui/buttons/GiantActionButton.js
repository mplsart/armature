'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/buttons/GiantActionButton.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Style Overrides for the button
var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing.unit,
      fontSize: '1.8rem',
      height: '4.5rem',
      lineHeight: '4.5rem',
      padding: '0 2.5rem',
      fontWeight: 'bold'
    },
    input: {
      display: 'none'
    }
  };
};

function GiantActionButton(props) {
  var classes = props.classes,
      children = props.children,
      rest = _objectWithoutProperties(props, ['classes', 'children']);

  return _react2.default.createElement(
    _Button2.default,
    _extends({ variant: 'raised', color: 'primary', className: classes.button }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }),
    children
  );
}

GiantActionButton.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};

exports.default = (0, _styles.withStyles)(styles)(GiantActionButton);