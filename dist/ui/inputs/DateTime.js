'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/inputs/DateTime.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeInput = function (_React$Component) {
  _inherits(DateTimeInput, _React$Component);

  function DateTimeInput(props) {
    _classCallCheck(this, DateTimeInput);

    var _this = _possibleConstructorReturn(this, (DateTimeInput.__proto__ || Object.getPrototypeOf(DateTimeInput)).call(this, props));

    var internalValue = (0, _moment2.default)(new Date(_this.props.value));
    if (!internalValue.isValid()) {
      internalValue = (0, _moment2.default)(new Date(props.defaultValue));
    }

    _this.state = {
      internalValue: internalValue
    };
    return _this;
  }

  _createClass(DateTimeInput, [{
    key: 'cleanDate',
    value: function cleanDate(val) {
      var date_obj = (0, _moment2.default)(new Date(val));
      if (!date_obj.isValid()) {
        date_obj = (0, _moment2.default)(new Date(this.props.defaultValue));
      }
      return date_obj.format('YYYY-MM-DD');
    }
  }, {
    key: 'cleanTime',
    value: function cleanTime(val) {
      var date_obj = (0, _moment2.default)(new Date(val));
      if (!date_obj.isValid()) {
        date_obj = (0, _moment2.default)(new Date(this.props.defaultValue));
      }
      return date_obj.format('HH:mm');
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(event) {
      var dateValue = event.target.value;
      var internalValue = this.state.internalValue;
      internalValue = (0, _moment2.default)(dateValue + 'T' + internalValue.format('HH:mm:ss'));
      this.setState({ internalValue: internalValue });
      this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(event) {
      var timeValue = event.target.value;
      var internalValue = this.state.internalValue;
      internalValue = (0, _moment2.default)(internalValue.format('YYYY-MM-DD') + 'T' + timeValue);
      this.setState({ internalValue: internalValue });
      this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          label = _props.label,
          rest = _objectWithoutProperties(_props, ['onChange', 'defaultValue', 'label']);

      var value = this.state.internalValue;
      var controlStyle = {
        justifyContent: 'start',
        flexFlow: 'row'
      };

      return _react2.default.createElement(
        _FormControl2.default,
        { fullWidth: true, required: true, style: controlStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        _react2.default.createElement(
          _Input.InputLabel,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          label
        ),
        _react2.default.createElement(_Input2.default, _extends({}, rest, { value: this.cleanDate(value), onChange: this.handleDateChange.bind(this), style: { alignSelf: 'flex-end', width: '50%', 'fontSize': '14px' }, type: 'date', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        })),
        _react2.default.createElement(_Input2.default, _extends({}, rest, { value: this.cleanTime(value), onChange: this.handleTimeChange.bind(this), inputProps: { step: 300 }, style: { alignSelf: 'flex-end', width: '45%', 'fontSize': '14px' }, type: 'time', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }))
      );
    }
  }]);

  return DateTimeInput;
}(_react2.default.Component);

exports.default = DateTimeInput;


DateTimeInput.defaultProps = { defaultValue: (0, _moment2.default)() };

DateTimeInput.propTypes = {
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.string, //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
  defaultValue: _propTypes2.default.string //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
};