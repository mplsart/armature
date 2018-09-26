import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Autosuggest from 'react-autosuggest';

let styles = (theme) => {
  return {
    avatar: {
      backgroundColor: `#${theme.venues.default_color}`,
      '&.business': { backgroundColor: `#${theme.venues.business.default_color}`},
      '&.gallery': { backgroundColor: `#${theme.venues.gallery.default_color}`},
      '&.institution': { backgroundColor: `#${theme.venues.institution.default_color}`},
      '&.popup': { backgroundColor: `#${theme.venues.popup.default_color}`},
      '&.public': { backgroundColor: `#${theme.venues.public.default_color}`},
      '&.studios': { backgroundColor: `#${theme.venues.studios.default_color}`},
      '&.inputAdornment': { height: 20, width: 20, fontSize: '.7rem', }
    },

    container: {
      flexGrow: 1,
      position: 'relative',
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: 0, //theme.spacing.unit,
      left: 0,
      right: 0,
    },
    suggestion: {
      display: 'block',
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
    },

    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },

    suggestionListFooterItem: {
      backgroundColor: theme.palette.grey[100],
      '& aside': {
        [theme.breakpoints.only('xs')]: {
          fontSize:'12px'
        }
      }
    }
  };
};


function getSuggestionValue(suggestion) {
  if (!suggestion) { return ''; };

  return suggestion.name;
}

class VenueAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    let state = {
      suggestedResources: [],
      isFocused: false,
      isSelected: false,
      selectedResource: null,
      textValue: ''
    };

    // If there is an initial value, populate that
    if (props.value && this.props.value.resource_id) {
      let resource = this.props.value;
      state.suggestedResources = [resource];
      state.selectedResource = resource;
      state.isSelected = true;
      state.textValue = resource.name;
    }

    this.state = state;
  }

  handleSearchError(e) {
    console.log('There was an error...');
    console.log(e);
  }

  renderSuggestionsContainer({ containerProps, children, query}) {
    let footer;
    let {classes} = this.props;

    if (this.state.isFocused) {

      if (this.state.textValue == '') {
        footer = (<MenuItem component="div" className={classes.suggestionListFooterItem} onClick={(e)=> (console.log(e))}><Typography variant="body2"><span>Start typing to search...</span></Typography></MenuItem>);
      }
      else {
        footer = (<MenuItem component="div" className={classes.suggestionListFooterItem} onClick={(e)=> (console.log(e))}><Typography variant="body2"><span>Not seeing what you are looking for?</span> &nbsp; <a onClick={(e)=> (console.log(e))}> Create new Venue</a></Typography></MenuItem>);
      }
    }

    return (
      <Paper {...containerProps} square>
        {children}
        {footer}
      </Paper>
    );
  }

  renderSuggestion(resource, { query, isHighlighted }) {
    //const matches = match(suggestion.label, query);
    //const parts = parse(suggestion.label, matches);

    let {classes} = this.props;
    let avatar;
    if (resource.primary_image_resource
      && resource.primary_image_resource.versions
      && resource.primary_image_resource.versions.THUMB.url) {
      let src = resource.primary_image_resource.versions.THUMB.url || null;
      avatar = (<Avatar className={classNames(classes.avatar, 'searchResult')} alt={resource.name} src={src} />);
    }

    if (!avatar) {
      avatar = (<Avatar className={classNames(classes.avatar, resource.category, 'searchResult')}>{resource.name[0]}</Avatar>);
    }
    return (
      <MenuItem selected={isHighlighted} component="div">
        <ListItemIcon className={classes.icon}>
          {avatar}
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          primary={(<Typography variant="body2" component="span"><span>{resource.name} {resource.is_closed && (<span>(closed)</span>)}</span></Typography>)}
          secondary={(<Typography variant="body2" component="span"><span>{resource.category} - {resource.address} - {resource.city}</span></Typography>)}
          />
      </MenuItem>
    );
    }

  getSuggestions(value) {
    return this.state.suggestedResources;
  }

  fetchSearchResults(value) {
    // TODO: Look in cache for prior searches
    // TODO: Do timeout so we're not spamng the server
    // TODO: Scrub data field to be urlsafe
    // TODO: Use centralized API Client (?)

    var errorCallback = this.handleSearchError.bind(this);
    var successCallback = this.searchResultsHandler.bind(this);

    fetch(this.props.apiHost + '/api/venues?verbose=true&q=' + value)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((items) => successCallback(items))
      .catch((e) => errorCallback(e));
  };

  searchResultsHandler(response) {
    this.setState({suggestedResources: response.results});
  }

  handleSelection(e, {suggestion}) {
    let resource  = suggestion;
    this.setState({isSelected: true, isFocused:false, selectedResource: resource, textValue: resource.name, suggestedResources: []});
    this.props.onChange(resource);
  }

  handleTextFocus(e) {
    this.setState({isFocused: true});
  }

  handleTextBlur(e) {
    this.setState({isFocused: false});
  }

  handleTextChange(e, {newValue, method}) {
    if (method == 'enter' || method == 'down' || method == 'up') return;
    if (method == 'escape') {
      this.setState({
        suggestedResources: [],
        isFocused:false,
      });
      return;
    };

    // Called when the user types
    let newState = {textValue: e.target.value};

    this.fetchSearchResults(e.target.value);

    // If there is a selection, remove it
    let {isSelected}  = this.state;
    if (isSelected) {
      newState.isSelected = false;
      newState.selectedResource = null;
    }

    this.setState(newState);
  }

  handleSuggestionsFetchRequested = ({ value, reason}) => {
    let suggestedResources = this.getSuggestions(value);

    if (reason == 'suggestions-revealed') { // arrow key, for example
      if (this.state.selectedResource && suggestedResources.length == 0) {
        suggestedResources.push(this.state.selectedResource);
      }
    }

    this.setState({
      suggestedResources: suggestedResources,
      isFocused:true,
    });
  };

  handleSuggestionsClearRequested = () => {
    let suggestedResources = [];
    if (this.state.selectedResource) {
      suggestedResources.push(this.state.selectedResource);
    }

    this.setState({
      suggestedResources: suggestedResources,
    });
  };

  onSuggestionHighlighted = ({ suggestion }) => {
    let resource  = suggestion;

    // Case - no resource selected, return
    if (!resource) return;

    // Case - Selection is same as stored one, return - saves infinite loop on render
    if (this.state.selectedResource && this.state.selectedResource.name == resource.name) {
      return;
    }

    // Case: New Selection
    this.setState({isSelected: true, isFocused:true, selectedResource: resource, /* textValue: resource.name, suggestedResources: []*/});
    this.props.onChange(resource);
  }

  render() {
    let {classes, apiHost, ...rest} = this.props;
    let {isSelected, selectedResource, textValue} = this.state;

    // This is required to trigger controlled vs. uncontrolled
    rest.value = textValue || '';

    // If there is a selection, decorate the input to refelect this
    if (isSelected) {
      // Determine src
      let avatar;
      if (selectedResource.primary_image_resource
        && selectedResource.primary_image_resource.versions
        && selectedResource.primary_image_resource.versions.THUMB.url
      ) {
        let src = selectedResource.primary_image_resource.versions.THUMB.url || null;
        avatar = (<Avatar className={classNames(classes.avatar, 'inputAdornment')} alt={selectedResource.name} src={src} />);
      }

      if (!avatar) {
        avatar = (<Avatar className={classNames(classes.avatar, selectedResource.category, 'inputAdornment')}>{selectedResource.name[0]}</Avatar>);
      }

      rest.startAdornment= (<InputAdornment position="start">{avatar}</InputAdornment>);
      rest.value = selectedResource.name;
    }

    let renderInput = (inputProps) => {
      let {label, classes, ...rest} = inputProps;

      return (
        <FormControl className={classes.FormControl} fullWidth required>
          <InputLabel>{label}</InputLabel>
          <Input {...rest} />
        </FormControl>
      );
    };

    return (
      <Autosuggest
        ref={el => this.input = el}

        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        onSuggestionHighlighted={this.onSuggestionHighlighted.bind(this)}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestedResources}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={this.renderSuggestionsContainer.bind(this)}
        onSuggestionSelected={this.handleSelection.bind(this)}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion.bind(this)}
        focusInputOnSuggestionClick={false}
        inputProps={{
          classes,
          ...rest,
          onChange: this.handleTextChange.bind(this),
          onFocus: this.handleTextFocus.bind(this),
          onBlur: this.handleTextBlur.bind(this),
        }}
      />
    );
  }
}

VenueAutocomplete.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func,
  apiHost: PropTypes.string
};

export default withStyles(styles)(VenueAutocomplete);