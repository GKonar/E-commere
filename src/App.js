import React from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from './themes/mainTheme';

import WelcomePage from './pages/WelcomePage/WelcomePage'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <WelcomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
