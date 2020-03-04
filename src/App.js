import React from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar';

// STRIPE payments
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// REDUX
import { connect } from 'react-redux';

// Make sure to call `loadStripe` outside of a component’s render to avoid // from DOCS
// recreating the `Stripe` object on every render. 
const stripePromise = loadStripe("pk_test_odEMo2bB5CVGgwWwclSUfqWO00SsiPJxQU");

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
      <Elements stripe={stripePromise}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={mainTheme}>
            <Navbar />
            <div className="App" style={{ marginTop: '80px' }}>
              <Routes products={shopItems} />
            </div>
          </ThemeProvider>
        </MuiThemeProvider>
      </Elements>
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
