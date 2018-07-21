import React from 'react';
import PageBase from '../../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';
import DateTimeInput from '../../../src/ui/inputs/DateTime';
import DateTimeInputMaterial from '../../../src/ui/inputs/DateTimeInputMaterial';
import moment from 'moment';

class Index extends React.Component {
  handleDateTimeChange = (name, i) => value => {

    // Assume in native browser time... and cast to UTC
    var date_obj = moment(new Date(value)); // TODO: As add as locale..
    date_obj = date_obj.utc();
    console.log(date_obj.format('YYYY-MM-DD[T]HH:mm:ss[Z]'));
  };

  // Utility
  cleanDate(date) {
    // Assume date is in UTC
    var date_obj = moment(new Date(date));
    return date_obj.format('YYYY-MM-DD[T]HH:mm');
    return date.substring(0, date.length-1);
  }
  render() {

    var defaultValue = '';
    return (
      <PageBase>
        <h1>Date & Time Input</h1>
        <p>...</p>


        <h2>DateTime Input with Material-UI Picker Controls</h2>
        <pre>import DateTimeInput from ... </pre>

        <div>
          <h3>Basic</h3>
          <DateTimeInputMaterial id="start" label="Start" value={this.cleanDate(null)} defaultValue={defaultValue} onChange={(value) => this.handleDateTimeChange('start')(value)} fullWidth margin="dense" required />
        </div>
        <br />

        <h2>DateTime Input with Native Controls</h2>
        <pre>import DateTimeInput from ... </pre>

        <div>
          <h3>Basic</h3>
          <DateTimeInput id="start" label="Start" value={this.cleanDate(null)} defaultValue={defaultValue} onChange={(value) => this.handleDateTimeChange('start')(value)} fullWidth margin="dense" required />
        </div>

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));