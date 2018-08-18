'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/cards/utility/PromoCardInstagram.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '32px',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.secondary[500],
      color: '#ffffff',
      display: 'block',
      fontWeight: 100,
      '&:before': {
        content: '"" ""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%'
      }
    },

    contentContainer: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  };
};

function PromoCardInstagram(_ref) {
  var classes = _ref.classes,
      resource = _ref.resource,
      linkClassProps = _ref.linkClassProps,
      linkClass = _ref.linkClass,
      props = _objectWithoutProperties(_ref, ['classes', 'resource', 'linkClassProps', 'linkClass']);

  var derp = { linkClass: linkClass };

  return _react2.default.createElement(
    derp.linkClass,
    _extends({}, linkClassProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }),
    _react2.default.createElement(
      'span',
      { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      },
      _react2.default.createElement(
        'span',
        { className: classes.contentContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          _react2.default.createElement('i', { className: 'fa fa-instagram', style: { fontSize: '120px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })
        ),
        _react2.default.createElement(
          'p',
          { style: { fontSize: '30px', lineHeight: '40px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          'Follow along.'
        )
      )
    )
  );
}

PromoCardInstagram.propTypes = {
  classes: _propTypes2.default.object,
  resource: _propTypes2.default.object,
  linkClassProps: _propTypes2.default.object,
  linkClass: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

exports.default = (0, _styles.withStyles)(styles)(PromoCardInstagram);