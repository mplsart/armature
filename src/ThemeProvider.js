import React from 'react';
import { JssProvider } from 'react-jss';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { getContext } from './server/context';
import CssBaseline from 'material-ui/CssBaseline';
import GlobalStyles from './GlobalStyles'
import muiTheme from './theme';
//See: https://material-ui-next.com/customization/themes/#configuration-variables for additional features

// Note: This is currently only in use by Admin Client
export default function ThemeProvider({children}) {

  //https://github.com/mui-org/material-ui/issues/7627
  if (process.browser) {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyles />
        { children }
      </MuiThemeProvider>
    );
  } else {
    console.log('This is still experimental, especially for next.js');

    // Server Rendering in Next.js
    const context = getContext();
    return (
      <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
        <MuiThemeProvider theme={muiTheme} sheetsManager={context.sheetsManager} >
          <CssBaseline />
          <GlobalStyles />
          { children }
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

ThemeProvider.propTypes = {
    children: PropTypes.node
}