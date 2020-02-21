import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar';

import database from './firebase/firebase'

function App() {
  const [shopItems, setShopItems] = useState();

  // Gonna be moved to Redux
  useEffect(() => {
    database.ref('products/forHome').on('value', snapshot => {
      const items = [];
      snapshot.forEach(item => {
        items.push({
          id: item.key,
          ...item.val()
        });
      })
      console.log(items)
      setShopItems(items)
    })
  }, [])

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <div className="App" style={{ marginTop: '80px' }}>
            {
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
    basketItems: state.basketItems
  }
}

export default connect(mapStateToProps)(App);
