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

var _styles = require('material-ui/styles');

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('material-ui/Form');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    avatar: {
      height: 20,
      width: 20,
      fontSize: '.7rem',
      backgroundColor: '#' + theme.venues.default_color,
      '&.business': { backgroundColor: '#' + theme.venues.business.default_color },
      '&.gallery': { backgroundColor: '#' + theme.venues.gallery.default_color },
      '&.institution': { backgroundColor: '#' + theme.venues.institution.default_color },
      '&.popup': { backgroundColor: '#' + theme.venues.popup.default_color },
      '&.public': { backgroundColor: '#' + theme.venues.public.default_color },
      '&.studios': { backgroundColor: '#' + theme.venues.studios.default_color }
    }
  };
};

var VenueAutocomplete = function (_React$Component) {
  _inherits(VenueAutocomplete, _React$Component);

  function VenueAutocomplete(props) {
    _classCallCheck(this, VenueAutocomplete);

    var _this = _possibleConstructorReturn(this, (VenueAutocomplete.__proto__ || Object.getPrototypeOf(VenueAutocomplete)).call(this, props));

    var state = {
      suggestedResources: [],
      isSelected: false,
      selectedResource: null,
      textValue: ''
    };

    // If there is an initial value, populate that
    if (props.value && _this.props.value.resource_id) {
      state.selectedResource = props.value;
      state.isSelected = true;
      state.textValue = props.value.name;
    }

    _this.state = state;
    return _this;
  }

  _createClass(VenueAutocomplete, [{
    key: 'handleSearchError',
    value: function handleSearchError(e) {
      console.log('There was an error...');
      console.log(e);
    }
  }, {
    key: 'fetchSearchResults',
    value: function fetchSearchResults(data) {
      // TODO: Look in cache for prior searches
      // TODO: Do timeout so we're not spamng the server
      // TODO: Scrub data field to be urlsafe
      // TODO: Use centralized API Client (?)

      var errorCallback = this.handleSearchError.bind(this);
      var successCallback = this.searchResultsHandler.bind(this);

      fetch('https://www.mplsart.com/api/venues?q=' + data).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (items) {
        return successCallback(items);
      }).catch(function (e) {
        return errorCallback(e);
      });
    }
  }, {
    key: 'searchResultsHandler',
    value: function searchResultsHandler(response) {
      this.setState({ suggestedResources: response.results });
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(resource, e) {
      this.setState({ isSelected: true, selectedResource: resource, textValue: resource.name, suggestedResources: [] });
    }
  }, {
    key: 'handleTextChange',
    value: function handleTextChange(e) {
      console.log('WHA T??');
      // Called when the user types
      var newState = { textValue: e.target.value };

      this.fetchSearchResults(e.target.value);

      // If there is a selection, remove it
      var isSelected = this.state.isSelected;

      if (isSelected) {
        newState.isSelected = false;
        newState.selectedResource = null;
      }

      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          label = _props.label,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['classes', 'label', 'onChange']);

      var _state = this.state,
          isSelected = _state.isSelected,
          selectedResource = _state.selectedResource,
          suggestedResources = _state.suggestedResources,
          textValue = _state.textValue;

      // This is required to trigger controlled vs. uncontrolled

      rest.value = textValue;

      // If there is a selection, decorate the input to refelect this
      if (isSelected) {
        // Determine src
        var avatar = void 0;
        if (selectedResource.primary_image_resource && selectedResource.primary_image_resource.versions.THUMB.url) {
          var src = selectedResource.primary_image_resource.versions.THUMB.url || null;
          avatar = _react2.default.createElement(_Avatar2.default, { className: classes.avatar, alt: selectedResource.name, src: src });
        }

        if (!avatar) {
          avatar = _react2.default.createElement(
            _Avatar2.default,
            { className: (0, _classnames2.default)(classes.avatar, selectedResource.category) },
            selectedResource.name[0]
          );
        }

        rest.startAdornment = _react2.default.createElement(
          _Input.InputAdornment,
          { position: 'start' },
          avatar
        );
        rest.value = selectedResource.name;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Form.FormControl,
          { fullWidth: true, required: true },
          _react2.default.createElement(
            _Input.InputLabel,
            null,
            label
          ),
          _react2.default.createElement(_Input2.default, _extends({}, rest, { onChange: this.handleTextChange.bind(this) }))
        ),
        suggestedResources.map(function (resource) {
          return _react2.default.createElement(
            'li',
            { onClick: _this2.handleSelection.bind(_this2, resource) },
            resource.name
          );
        })
      );
    }
  }]);

  return VenueAutocomplete;
}(_react2.default.Component);

VenueAutocomplete.propTypes = {
  classes: _propTypes2.default.object,
  value: _propTypes2.default.object,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

exports.default = (0, _styles.withStyles)(styles)(VenueAutocomplete);