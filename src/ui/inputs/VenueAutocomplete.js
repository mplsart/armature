import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment} from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';

let styles = (theme) => {
  return {
    avatar: {
      height: 20,
      width: 20,
      fontSize: '.7rem',
      backgroundColor: `#${theme.venues.default_color}`,
      '&.business': { backgroundColor: `#${theme.venues.business.default_color}`},
      '&.gallery': { backgroundColor: `#${theme.venues.gallery.default_color}`},
      '&.institution': { backgroundColor: `#${theme.venues.institution.default_color}`},
      '&.popup': { backgroundColor: `#${theme.venues.popup.default_color}`},
      '&.public': { backgroundColor: `#${theme.venues.public.default_color}`},
      '&.studios': { backgroundColor: `#${theme.venues.studios.default_color}`},
    }
  };
};

class VenueAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    let state = {
      suggestedResources: [],
      isSelected: false,
      selectedResource: null,
      textValue: ''
    };

    // If there is an initial value, populate that
    if (props.value && this.props.value.resource_id) {
      state.selectedResource = props.value;
      state.isSelected = true;
      state.textValue = props.value.name;
    }

    this.state = state;
  }

  handleSearchError(e) {
    console.log('There was an error...');
    console.log(e);
  }

  fetchSearchResults(data) {
    // TODO: Look in cache for prior searches
    // TODO: Do timeout so we're not spamng the server
    // TODO: Scrub data field to be urlsafe
    // TODO: Use centralized API Client (?)

    var errorCallback = this.handleSearchError.bind(this);
    var successCallback = this.searchResultsHandler.bind(this);

    fetch('https://www.mplsart.com/api/venues?q=' + data)
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

  handleSelection(resource, e) {
    this.setState({isSelected: true, selectedResource: resource, textValue: resource.name, suggestedResources: []});
  }

  handleTextChange(e) {
    console.log('WHA T??');
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

  render() {
    let {classes, label, onChange, ...rest} = this.props;
    let {isSelected, selectedResource, suggestedResources, textValue} = this.state;

    // This is required to trigger controlled vs. uncontrolled
    rest.value = textValue;

    // If there is a selection, decorate the input to refelect this
    if (isSelected) {
      // Determine src
      let avatar;
      if (selectedResource.primary_image_resource && selectedResource.primary_image_resource.versions.THUMB.url) {
        let src = selectedResource.primary_image_resource.versions.THUMB.url || null;
        avatar = (<Avatar className={classes.avatar} alt={selectedResource.name} src={src} />);
      }

      if (!avatar) {
        avatar = (<Avatar className={classNames(classes.avatar, selectedResource.category)}>{selectedResource.name[0]}</Avatar>);
      }

      rest.startAdornment= (<InputAdornment position="start">{avatar}</InputAdornment>);
      rest.value = selectedResource.name;
    }

    return (
      <div>
        <FormControl fullWidth required>
          <InputLabel>{label}</InputLabel>
          <Input {...rest} onChange={this.handleTextChange.bind(this)} />
        </FormControl>
        { suggestedResources.map((resource)=> {
          return (<li onClick={this.handleSelection.bind(this, resource)}>{resource.name}</li>);
        })}
      </div>
    );
  }
}

VenueAutocomplete.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(styles)(VenueAutocomplete);