'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/alerts/NoticeBanner.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      backgroundColor: '#FFF59D',
      padding: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    }
  };
};

function NoticeBanner(_ref) {
  var children = _ref.children,
      classes = _ref.classes;

  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    },
    children
  );
}

NoticeBanner.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};

exports.default = (0, _styles.withStyles)(styles)(NoticeBanner);