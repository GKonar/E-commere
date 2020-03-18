import React from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// REDUX
import { connect } from 'react-redux';

function App({ forHer, forHim, forHome, toys, hottest, newest }) {
  const shopItems = {
    forHim,
    forHer,
    forHome,
    toys,
    hottest,
    newest
  }

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <div className="App" style={{ marginTop: '80px' }}>
            <Routes products={shopItems} />
          </div>
          <Footer />
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    forHer: state.forHer,
    forHim: state.forHim,
    forHome: state.forHome,
    toys: state.toys,
    hottest: state.hottest,
    newest: state.newest
  }
}

export default connect(mapStateToProps, null)(App);
