import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar';

//DEV
import { products } from './testContent';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <div className="App" style={{ marginTop: '64px' }}>
            <Routes products={products} />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
