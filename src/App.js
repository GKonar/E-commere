import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';



import Routes from './Routes';

//DEV
import { products } from './testContent';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <div className="App">
            <Routes products={products} />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>

  );
}

export default App;
