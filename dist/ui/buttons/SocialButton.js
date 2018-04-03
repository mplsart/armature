'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      'color': '#ffffff',
      'width': '24px',
      'height': '24px',
      'font-size': '18px',
      'margin': theme.spacing.unit,
      'padding': '1px', // This is annoying difference between menu and venue list

      'background-color': theme.palette.primary[500],
      'display': 'block',
      'text-align': 'center',
      'float': 'left',
      '&:hover': {
        'background-color': theme.palette.primary[900]
      }
    }
  };
};

var SocialButton = function SocialButton(_ref) {
  var classes = _ref.classes,
      component = _ref.component,
      service = _ref.service,
      rest = _objectWithoutProperties(_ref, ['classes', 'component', 'service']);

  var temp = { component: 'a' };
  if (component) {
    temp.component = component;
  }

  return _react2.default.createElement(
    temp.component,
    _extends({ className: (0, _classnames2.default)(classes.root) }, rest),
    _react2.default.createElement('i', { className: 'fa fa-' + service })
  );
};

SocialButton.propTypes = {
  classes: _propTypes2.default.object,
  service: _propTypes2.default.string,
  component: _propTypes2.default.func
};

exports.default = (0, _styles.withStyles)(styles)(SocialButton);