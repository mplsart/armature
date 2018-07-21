'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/ui/inputs/DateTimeInputMaterial.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _DatePicker = require('material-ui-pickers/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _materialUiPickers = require('material-ui-pickers');

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeInputMaterial = function (_React$Component) {
  _inherits(DateTimeInputMaterial, _React$Component);

  function DateTimeInputMaterial(props) {
    _classCallCheck(this, DateTimeInputMaterial);

    var _this = _possibleConstructorReturn(this, (DateTimeInputMaterial.__proto__ || Object.getPrototypeOf(DateTimeInputMaterial)).call(this, props));

    var internalValue = (0, _moment2.default)(new Date(_this.props.value));
    if (!internalValue.isValid()) {
      internalValue = (0, _moment2.default)(new Date(props.defaultValue));
    }

    _this.state = {
      internalValue: internalValue,
      isDatePickerOpen: false,
      isTimePickerOpen: false
    };
    return _this;
  }

  /* Material-UI Picker Specific Methods */


  _createClass(DateTimeInputMaterial, [{
    key: 'prepareValueForDatePicker',
    value: function prepareValueForDatePicker(momentValue) {
      if (!momentValue.isValid()) {
        console.error('Invalid date' + momentValue);
        momentValue = (0, _moment2.default)(new Date(this.props.defaultValue));
      }
      return momentValue;
    }
  }, {
    key: 'prepareValueForTimePicker',
    value: function prepareValueForTimePicker(momentValue) {
      if (!momentValue.isValid()) {
        console.error('Invalid date' + momentValue);
        momentValue = (0, _moment2.default)(new Date(this.props.defaultValue));
      }
      return momentValue;
    }
  }, {
    key: 'handleDateChange2',
    value: function handleDateChange2(momentValue) {
      var dateValue = momentValue.format('YYYY-MM-DD');
      var internalValue = this.state.internalValue;
      internalValue = (0, _moment2.default)(dateValue + 'T' + internalValue.format('HH:mm:ss'));

      // Desktop Chrome will allow you to scroll to dates like 2/30 which are invalid...
      if (!internalValue.isValid()) {
        // TODO: Detect if it is up/down arrow keys and delta day
        internalValue = this.state.internalValue;
      }

      this.setState({ internalValue: internalValue });
      this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(momentValue) {
      console.log(momentValue);
      var timeValue = momentValue.format('HH:mm:ss');
      var internalValue = this.state.internalValue;
      internalValue = (0, _moment2.default)(internalValue.format('YYYY-MM-DD') + 'T' + timeValue);

      // Desktop Chrome will allow you to scroll to dates like 2/30 which are invalid...
      if (!internalValue.isValid()) {
        // TODO: Detect if it is up/down arrow keys and delta day
        internalValue = this.state.internalValue;
      }

      this.setState({ internalValue: internalValue });
      this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
    }

    /* Native Picker Specific Methods */

  }, {
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

      // Desktop Chrome will allow you to scroll to dates like 2/30 which are invalid...
      if (!internalValue.isValid()) {
        // TODO: Detect if it is up/down arrow keys and delta day
        internalValue = this.state.internalValue;
      }

      this.setState({ internalValue: internalValue });
      this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(event) {
      console.log('TABBED TO?');
      console.log(this.state.isDatePickerOpen);

      //if (!this.state.isDatePickerOpen) {
      //  this.picker.open();
      //}
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(event) {
      console.log('Blurred?');
      console.log(this.state.isDatePickerOpen);
    }
  }, {
    key: 'handleInputPickerClose',
    value: function handleInputPickerClose(event) {
      console.log('handleInputPickerClose');
      this.setState({ isDatePickerOpen: false });
      //console.log(this.pickerInput.select);
    }
  }, {
    key: 'handleInputPickerOpen',
    value: function handleInputPickerOpen(event) {
      console.log('handleInputPickerOpen');
      this.setState({ isDatePickerOpen: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          label = _props.label,
          rest = _objectWithoutProperties(_props, ['onChange', 'defaultValue', 'label']);

      var value = this.state.internalValue; // This is a moment

      var controlStyle = {
        justifyContent: 'start',
        flexFlow: 'row'
      };

      return _react2.default.createElement(
        'div',
        { style: controlStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        },
        _react2.default.createElement(
          'span',
          { style: { alignSelf: 'flex-end', width: '50%', 'fontSize': '14px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            }
          },
          _react2.default.createElement(_DatePicker2.default, {
            label: label,
            required: true,
            value: this.prepareValueForDatePicker(value),
            onChange: this.handleDateChange2.bind(this),
            ref: function ref(node) {
              _this2.picker = node;
            },
            autoOk: true,
            showTodayButton: true,
            format: 'MM/DD/YYYY',
            onOpen: this.handleInputPickerOpen.bind(this),
            onClose: this.handleInputPickerClose.bind(this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            }
          })
        ),
        _react2.default.createElement(_materialUiPickers.TimePicker, {
          autoOk: true,
          value: this.prepareValueForTimePicker(value),
          onChange: this.handleTimeChange.bind(this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }),
        _react2.default.createElement(_Input2.default, _extends({}, rest, { value: this.cleanDate(value), onChange: this.handleDateChange.bind(this), style: { alignSelf: 'flex-end', width: '50%', 'fontSize': '14px' }, type: 'date', __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        })),
        _react2.default.createElement(_Input2.default, _extends({}, rest, { value: this.cleanTime(value), ref: function ref(node) {
            _this2.timePickerInput = node;
          }, onChange: this.handleTimeChange.bind(this), inputProps: { step: 300 }, style: { alignSelf: 'flex-end', width: '45%', 'fontSize': '14px' }, type: 'time', __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }))
      );
    }
  }]);

  return DateTimeInputMaterial;
}(_react2.default.Component);

exports.default = DateTimeInputMaterial;


DateTimeInputMaterial.defaultProps = { defaultValue: (0, _moment2.default)() };

DateTimeInputMaterial.propTypes = {
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.string, //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
  defaultValue: _propTypes2.default.string //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
};