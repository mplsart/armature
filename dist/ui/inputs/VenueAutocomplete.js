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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Menu = require('material-ui/Menu');

var _List = require('material-ui/List');

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    avatar: {
      backgroundColor: '#' + theme.venues.default_color,
      '&.business': { backgroundColor: '#' + theme.venues.business.default_color },
      '&.gallery': { backgroundColor: '#' + theme.venues.gallery.default_color },
      '&.institution': { backgroundColor: '#' + theme.venues.institution.default_color },
      '&.popup': { backgroundColor: '#' + theme.venues.popup.default_color },
      '&.public': { backgroundColor: '#' + theme.venues.public.default_color },
      '&.studios': { backgroundColor: '#' + theme.venues.studios.default_color },
      '&.inputAdornment': { height: 20, width: 20, fontSize: '.7rem' }
    },

    container: {
      flexGrow: 1,
      position: 'relative'
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    },

    suggestionListFooterItem: {
      backgroundColor: theme.palette.grey[100]
    }
  };
};

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

var VenueAutocomplete = function (_React$Component) {
  _inherits(VenueAutocomplete, _React$Component);

  function VenueAutocomplete(props) {
    _classCallCheck(this, VenueAutocomplete);

    var _this = _possibleConstructorReturn(this, (VenueAutocomplete.__proto__ || Object.getPrototypeOf(VenueAutocomplete)).call(this, props));

    _this.handleSuggestionsFetchRequested = function (_ref) {
      var value = _ref.value;


      _this.setState({
        suggestedResources: _this.getSuggestions(value)
      });
    };

    _this.handleSuggestionsClearRequested = function () {
      var suggestedResources = [];
      if (_this.state.selectedResource) {
        suggestedResources.push(_this.state.selectedResource);
      }

      _this.setState({
        suggestedResources: suggestedResources
      });
    };

    var state = {
      suggestedResources: [],
      isFocused: false,
      isSelected: false,
      selectedResource: null,
      textValue: ''
    };

    // If there is an initial value, populate that
    if (props.value && _this.props.value.resource_id) {
      var resource = _this.props.value;
      state.suggestedResources = [resource];
      state.selectedResource = resource;
      state.isSelected = true;
      state.textValue = resource.name;
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
    key: 'renderSuggestionsContainer',
    value: function renderSuggestionsContainer(_ref2) {
      var containerProps = _ref2.containerProps,
          children = _ref2.children,
          query = _ref2.query;

      var footer = void 0;
      var classes = this.props.classes;

      if (this.state.isFocused) {
        footer = _react2.default.createElement(
          _Menu.MenuItem,
          { component: 'div', className: classes.suggestionListFooterItem, onClick: function onClick(e) {
              return console.log(e);
            } },
          _react2.default.createElement(
            'span',
            null,
            'Not seeing what you are looking for?'
          ),
          ' \xA0 ',
          _react2.default.createElement(
            'a',
            { onClick: function onClick(e) {
                return console.log(e);
              } },
            ' Create new Venue'
          )
        );
      }

      return _react2.default.createElement(
        _Paper2.default,
        _extends({}, containerProps, { square: true }),
        children,
        footer
      );
    }
  }, {
    key: 'renderSuggestion',
    value: function renderSuggestion(resource, _ref3) {
      var query = _ref3.query,
          isHighlighted = _ref3.isHighlighted;

      //const matches = match(suggestion.label, query);
      //const parts = parse(suggestion.label, matches);

      var classes = this.props.classes;

      var avatar = void 0;
      if (resource.primary_image_resource && resource.primary_image_resource.versions && resource.primary_image_resource.versions.THUMB.url) {
        var src = resource.primary_image_resource.versions.THUMB.url || null;
        avatar = _react2.default.createElement(_Avatar2.default, { className: (0, _classnames2.default)(classes.avatar, 'searchResult'), alt: resource.name, src: src });
      }

      if (!avatar) {
        avatar = _react2.default.createElement(
          _Avatar2.default,
          { className: (0, _classnames2.default)(classes.avatar, resource.category, 'searchResult') },
          resource.name[0]
        );
      }

      return _react2.default.createElement(
        _Menu.MenuItem,
        { selected: isHighlighted, component: 'div' },
        _react2.default.createElement(
          _List.ListItemIcon,
          { className: classes.icon },
          avatar
        ),
        _react2.default.createElement(_List.ListItemText, {
          classes: { primary: classes.primary },
          primary: _react2.default.createElement(
            'span',
            null,
            resource.name,
            ' ',
            resource.is_closed && _react2.default.createElement(
              'span',
              null,
              '(closed)'
            )
          ),
          secondary: _react2.default.createElement(
            'span',
            null,
            resource.category,
            ' - ',
            resource.address,
            ' - ',
            resource.city
          )
        })
      );
    }
  }, {
    key: 'getSuggestions',
    value: function getSuggestions(value) {
      return this.state.suggestedResources;
    }
  }, {
    key: 'fetchSearchResults',
    value: function fetchSearchResults(value) {
      // TODO: Look in cache for prior searches
      // TODO: Do timeout so we're not spamng the server
      // TODO: Scrub data field to be urlsafe
      // TODO: Use centralized API Client (?)

      var errorCallback = this.handleSearchError.bind(this);
      var successCallback = this.searchResultsHandler.bind(this);

      fetch(this.props.apiHost + '/api/venues?verbose=true&q=' + value).then(function (response) {
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
    value: function handleSelection(e, _ref4) {
      var suggestion = _ref4.suggestion;

      var resource = suggestion;
      this.setState({ isSelected: true, selectedResource: resource, textValue: resource.name, suggestedResources: [resource] });
      this.props.onChange(resource);
    }
  }, {
    key: 'handleTextFocus',
    value: function handleTextFocus(e) {
      this.setState({ isFocused: true });
    }
  }, {
    key: 'handleTextBlur',
    value: function handleTextBlur(e) {
      this.setState({ isFocused: false });
    }
  }, {
    key: 'handleTextChange',
    value: function handleTextChange(e) {
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
      var _props = this.props,
          classes = _props.classes,
          apiHost = _props.apiHost,
          rest = _objectWithoutProperties(_props, ['classes', 'apiHost']);

      var _state = this.state,
          isSelected = _state.isSelected,
          selectedResource = _state.selectedResource,
          textValue = _state.textValue;

      // This is required to trigger controlled vs. uncontrolled

      rest.value = textValue || '';

      // If there is a selection, decorate the input to refelect this
      if (isSelected) {
        // Determine src
        var avatar = void 0;
        if (selectedResource.primary_image_resource && selectedResource.primary_image_resource.versions && selectedResource.primary_image_resource.versions.THUMB.url) {
          var src = selectedResource.primary_image_resource.versions.THUMB.url || null;
          avatar = _react2.default.createElement(_Avatar2.default, { className: (0, _classnames2.default)(classes.avatar, 'inputAdornment'), alt: selectedResource.name, src: src });
        }

        if (!avatar) {
          avatar = _react2.default.createElement(
            _Avatar2.default,
            { className: (0, _classnames2.default)(classes.avatar, selectedResource.category, 'inputAdornment') },
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

      var renderInput = function renderInput(inputProps) {
        var label = inputProps.label,
            classes = inputProps.classes,
            rest = _objectWithoutProperties(inputProps, ['label', 'classes']);

        return _react2.default.createElement(
          _Form.FormControl,
          { className: classes.FormControl, fullWidth: true, required: true },
          _react2.default.createElement(
            _Input.InputLabel,
            null,
            label
          ),
          _react2.default.createElement(_Input2.default, rest)
        );
      };

      return _react2.default.createElement(_reactAutosuggest2.default, {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        renderInputComponent: renderInput,
        suggestions: this.state.suggestedResources,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        renderSuggestionsContainer: this.renderSuggestionsContainer.bind(this),
        onSuggestionSelected: this.handleSelection.bind(this),
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: this.renderSuggestion.bind(this),
        focusInputOnSuggestionClick: false,
        inputProps: _extends({
          classes: classes
        }, rest, {
          onChange: this.handleTextChange.bind(this),
          onFocus: this.handleTextFocus.bind(this),
          onBlur: this.handleTextBlur.bind(this)
        })
      });

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
          _react2.default.createElement(_Input2.default, _extends({ onChange: this.handleTextChange.bind(this) }, rest))
        )
      );
    }
  }]);

  return VenueAutocomplete;
}(_react2.default.Component);

VenueAutocomplete.propTypes = {
  classes: _propTypes2.default.object,
  value: _propTypes2.default.object,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  apiHost: _propTypes2.default.string
};

exports.default = (0, _styles.withStyles)(styles)(VenueAutocomplete);