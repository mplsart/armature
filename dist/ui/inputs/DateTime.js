'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('material-ui/Form');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

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
    // Clean it ?

    _this.state = {
      internalValue: internalValue
    };
    return _this;
  }

  _createClass(DateTimeInput, [{
    key: 'cleanDate',
    value: function cleanDate(val) {
      //'2018-04-27T19:00'

      var date_obj = (0, _moment2.default)(new Date(val));
      return date_obj.format('YYYY-MM-DD');
    }
  }, {
    key: 'cleanTime',
    value: function cleanTime(val) {
      var date_obj = (0, _moment2.default)(new Date(val));
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
          label = _props.label,
          rest = _objectWithoutProperties(_props, ['onChange', 'label']);

      var value = this.state.internalValue;

      var controlStyle = {
        justifyContent: 'start',
        flexFlow: 'row'
      };

      return _react2.default.createElement(
        _Form.FormControl,
        { fullWidth: true, required: true, style: controlStyle },
        _react2.default.createElement(
          _Input.InputLabel,
          null,
          label
        ),
        _react2.default.createElement(_Input2.default, _extends({}, rest, { value: this.cleanDate(value), onChange: this.handleDateChange.bind(this), style: { alignSelf: 'flex-end', width: '50%' }, type: 'date' })),
        _react2.default.createElement(_Input2.default, _extends({}, rest, { value: this.cleanTime(value), onChange: this.handleTimeChange.bind(this), inputProps: { step: 300 }, style: { alignSelf: 'flex-end', width: '45%' }, type: 'time' }))
      );
    }
  }]);

  return DateTimeInput;
}(_react2.default.Component);

exports.default = DateTimeInput;


DateTimeInput.propTypes = {
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.string //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
};