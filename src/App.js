import React from 'react';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import WelcomePage from './pages/WelcomePage/WelcomePage'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <WelcomePage />
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
