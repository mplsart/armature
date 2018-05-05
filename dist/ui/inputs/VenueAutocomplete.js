'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('material-ui/Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VenueAutocomplete = function (_React$Component) {
  _inherits(VenueAutocomplete, _React$Component);

  function VenueAutocomplete() {
    _classCallCheck(this, VenueAutocomplete);

    return _possibleConstructorReturn(this, (VenueAutocomplete.__proto__ || Object.getPrototypeOf(VenueAutocomplete)).apply(this, arguments));
  }

  _createClass(VenueAutocomplete, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['label', 'value']);

      return _react2.default.createElement(
        _Form.FormControl,
        { fullWidth: true, required: true },
        _react2.default.createElement(
          _Input.InputLabel,
          null,
          label
        ),
        _react2.default.createElement(_Input2.default, rest),
        ' (',
        value,
        ')'
      );
    }
  }]);

  return VenueAutocomplete;
}(_react2.default.Component);

VenueAutocomplete.propTypes = {
  value: _propTypes2.default.string,
  label: _propTypes2.default.string
};

exports.default = VenueAutocomplete;
// value={this.cleanDate(value)} onChange={this.handleDateChange.bind(this)}