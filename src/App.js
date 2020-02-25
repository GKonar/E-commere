import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar';

// REDUX
import { fetchItems } from './store/actions/actions';
import { connect } from 'react-redux';

function App(props) {
  const { forHer, forHim, forHome, toys, hottest, newest } = props;
  const shopItems = {
    forHim,
    forHer,
    forHome,
    toys,
    hottest,
    newest
  }

  useEffect(() => {
    props.onFetchItems()
  }, [])

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <div className="App" style={{ marginTop: '80px' }}>
            {
              // add spinner while waiting for the products or lazy loading ??
              shopItems !== undefined ? <Routes products={shopItems} /> : null
            }
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchItems: () => dispatch(fetchItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
