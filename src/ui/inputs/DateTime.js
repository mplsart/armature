import React from 'react';
import PropTypes from 'prop-types'
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import moment from 'moment';

class DateTimeInput extends React.Component {
  constructor(props) {
    super(props);

    let internalValue =  moment(new Date(this.props.value));
    // Clean it ?

    this.state = {
      internalValue: internalValue
    };
  }

  cleanDate(val) {
    //'2018-04-27T19:00'

    var date_obj = moment(new Date(val));
    return date_obj.format('YYYY-MM-DD');
  }

  cleanTime(val) {
    var date_obj = moment(new Date(val));
    return date_obj.format('HH:mm');
  }

  handleDateChange(event) {
    let dateValue = event.target.value;
    let internalValue = this.state.internalValue;

    internalValue = moment(dateValue + 'T' + internalValue.format('HH:mm:ss'));
    this.setState({internalValue});
    this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
  }

  handleTimeChange(event) {
    let timeValue = event.target.value;
    let internalValue = this.state.internalValue;
    internalValue = moment(internalValue.format('YYYY-MM-DD') + 'T' + timeValue);
    this.setState({internalValue});
    this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
  }

  render() {
    let {onChange, label, ...rest} = this.props;

    let value = this.state.internalValue;

    let controlStyle = {
      justifyContent: 'start',
      flexFlow: 'row',
    };

    return (
      <FormControl fullWidth required style={controlStyle}>
        <InputLabel>{label}</InputLabel>
        <Input {...rest} value={this.cleanDate(value)} onChange={this.handleDateChange.bind(this)} style={{alignSelf: 'flex-end', width:'50%'}} type="date"/>
        <Input {...rest} value={this.cleanTime(value)} onChange={this.handleTimeChange.bind(this)} inputProps={{step: 300}} style={{alignSelf: 'flex-end', width:'45%'}} type="time"/>
      </FormControl>
    );
  }
}
export default DateTimeInput;


DateTimeInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string, //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
};