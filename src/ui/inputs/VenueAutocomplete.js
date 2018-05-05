import React from 'react';
import PropTypes from 'prop-types'
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class VenueAutocomplete extends React.Component {
  render(){
    let {label, value, ...rest} = this.props;

    return (
      <FormControl fullWidth required>
        <InputLabel>{label}</InputLabel>
        <Input {...rest} /> ({value})
      </FormControl>
    );
  }
}

VenueAutocomplete.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string
};

export default VenueAutocomplete;
// value={this.cleanDate(value)} onChange={this.handleDateChange.bind(this)}