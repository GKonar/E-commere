import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import mainTheme from './themes/mainTheme';
import theme from './themes/theme';
import WelcomePage from './pages/WelcomePage/WelcomePage'
import ProductPage from './pages/ProductPage/ProductPage'

import './firebase/firebase';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/product" component={ProductPage} />
            </Switch>
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>

  );
}

export default App;
