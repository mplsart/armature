import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '../ThemeProvider';

export default class oot extends React.Component {
  render() {
    return <ThemeProvider><div style={{border: '10px solid red'}}>{this.props.children}</div></ThemeProvider>
  }
}