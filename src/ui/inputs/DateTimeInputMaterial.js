import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from 'material-ui-pickers/DatePicker';
import { TimePicker } from 'material-ui-pickers';

import TextField from '@material-ui/core/TextField';

class DateTimeInputMaterial extends React.Component {
  constructor(props) {
    super(props);

    let internalValue =  moment(new Date(this.props.value));
    if (!internalValue.isValid()) {
      internalValue =  moment(new Date(props.defaultValue));
    }

    this.state = {
      internalValue: internalValue,
      isDatePickerOpen: false,
      isTimePickerOpen: false,
    };
  }

  /* Material-UI Picker Specific Methods */
  prepareValueForDatePicker(momentValue) {
    if (!momentValue.isValid()) {
      console.error('Invalid date' + momentValue);
      momentValue = moment(new Date(this.props.defaultValue));
    }
    return momentValue;
  }

  prepareValueForTimePicker(momentValue) {
    if (!momentValue.isValid()) {
      console.error('Invalid date' + momentValue);
      momentValue = moment(new Date(this.props.defaultValue));
    }
    return momentValue;
  }

  handleDateChange2(momentValue) {
    let dateValue = momentValue.format('YYYY-MM-DD');
    let internalValue = this.state.internalValue;
    internalValue = moment(dateValue + 'T' + internalValue.format('HH:mm:ss'));

    // Desktop Chrome will allow you to scroll to dates like 2/30 which are invalid...
    if (!internalValue.isValid()) {
      // TODO: Detect if it is up/down arrow keys and delta day
      internalValue = this.state.internalValue;
    }

    this.setState({internalValue});
    this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
  }


  handleTimeChange(momentValue) {
    console.log(momentValue);
    let timeValue = momentValue.format('HH:mm:ss');
    let internalValue = this.state.internalValue;
    internalValue = moment(internalValue.format('YYYY-MM-DD') + 'T' + timeValue);

    // Desktop Chrome will allow you to scroll to dates like 2/30 which are invalid...
    if (!internalValue.isValid()) {
      // TODO: Detect if it is up/down arrow keys and delta day
      internalValue = this.state.internalValue;
    }

    this.setState({internalValue});
    this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
  }

  /* Native Picker Specific Methods */
  cleanDate(val) {
    var date_obj = moment(new Date(val));
    if (!date_obj.isValid()) {
      date_obj = moment(new Date(this.props.defaultValue));
    }
    return date_obj.format('YYYY-MM-DD');
  }

  cleanTime(val) {
    var date_obj = moment(new Date(val));
    if (!date_obj.isValid()) {
      date_obj = moment(new Date(this.props.defaultValue));
    }
    return date_obj.format('HH:mm');
  }

  handleDateChange(event) {
    let dateValue = event.target.value;
    let internalValue = this.state.internalValue;
    internalValue = moment(dateValue + 'T' + internalValue.format('HH:mm:ss'));

    // Desktop Chrome will allow you to scroll to dates like 2/30 which are invalid...
    if (!internalValue.isValid()) {
      // TODO: Detect if it is up/down arrow keys and delta day
      internalValue = this.state.internalValue;
    }

    this.setState({internalValue});
    this.props.onChange(internalValue.format('YYYY-MM-DDTHH:mm:ss'));
  }

  handleInputFocus(event) {
    console.log('TABBED TO?');
    console.log(this.state.isDatePickerOpen);

    //if (!this.state.isDatePickerOpen) {
    //  this.picker.open();
    //}
  }

  handleInputBlur(event) {
    console.log('Blurred?');
    console.log(this.state.isDatePickerOpen);
  }

  handleInputPickerClose(event) {
    console.log('handleInputPickerClose');
    this.setState({isDatePickerOpen: false});
    //console.log(this.pickerInput.select);
  }

  handleInputPickerOpen(event) {
    console.log('handleInputPickerOpen');
    this.setState({isDatePickerOpen: true});
  }

  render() {
    let {onChange, defaultValue, label, ...rest} = this.props;
    let value = this.state.internalValue; // This is a moment

    let controlStyle = {
      justifyContent: 'start',
      flexFlow: 'row',
    };

    return (
      <div style={controlStyle}>
        <span style={{alignSelf: 'flex-end', width:'50%', 'fontSize': '14px'}}>
          <DatePicker
            label={label}
            required
            value={this.prepareValueForDatePicker(value)}
            onChange={this.handleDateChange2.bind(this)}
            ref={(node) => { this.picker = node; }}
            autoOk={true}
            showTodayButton={true}
            format="MM/DD/YYYY"
            onOpen={this.handleInputPickerOpen.bind(this)}
            onClose={this.handleInputPickerClose.bind(this)}
          />
        </span>

        <TimePicker
            autoOk
            value={this.prepareValueForTimePicker(value)}
            onChange={this.handleTimeChange.bind(this)}
          />

        <br />

        <Input {...rest} value={this.cleanDate(value)} onChange={this.handleDateChange.bind(this)} style={{alignSelf: 'flex-end', width:'50%', 'fontSize': '14px'}} type="date"/>
        <Input {...rest} value={this.cleanTime(value)} ref={(node) => { this.timePickerInput = node; }} onChange={this.handleTimeChange.bind(this)} inputProps={{step: 300}} style={{alignSelf: 'flex-end', width:'45%', 'fontSize': '14px'}} type="time"/>
      </div>
    );
  }
}
export default DateTimeInputMaterial;

DateTimeInputMaterial.defaultProps = { defaultValue: moment() };

DateTimeInputMaterial.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string, //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
  defaultValue: PropTypes.string //'UTC: ISO: YYYY-MM-DDTHH:mm:ssZ'
};