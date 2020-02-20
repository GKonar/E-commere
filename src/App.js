import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar';

import './firebase/firebase'; // connection to firebase

//DEV
// import { products } from './testContent';
import database from './firebase/firebase'


function App() {
  const [shopItems, setShopItems] = useState();

  useEffect(() => {
    database.ref('shopItems').on('value', snapshot => {
      const items = [];
      snapshot.forEach(item => {
        items.push({
          id: item.key,
          ...item.val()
        });
      })
      setShopItems(items)
      console.log(items)
    })
  }, [])

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <div className="App" style={{ marginTop: '64px' }}>
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
