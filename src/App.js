import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import mainTheme from './themes/mainTheme';
import theme from './themes/theme';

import Routes from './Routes';
import Navbar from './components/Navbar';

import axios from './axios';
// import database from './firebase/firebase';

function App() {

  const [shopItems, setShopItems] = useState({
    forHer: [],
    forHim: [],
    forHome: [],
    toys: [],
    newest: [],
    hottest: []
  });
  const items = {}

  useEffect(() => {
    axios.get('/products.json')
      .then(res => {
        let products = res.data;
        products = Object.entries(products);
        products = products.map(p => {
          return {
            category: p[0],
            productsInCategory: Object.entries(p[1])
              .map(p => {
                return {
                  id: p[0],
                  ...p[1]
                }
              })
          }
        })

        products.forEach(p => {
          switch (p.category) {
            case 'forHer': items.forHer = p.productsInCategory;
              break;
            case 'forHim': items.forHim = p.productsInCategory;
              break;
            case 'forHome': items.forHome = p.productsInCategory;
              break;
            case 'newest': items.newest = p.productsInCategory;
              break;
            case 'toys': items.toys = p.productsInCategory;
              break;
            case 'hottest': items.hottest = p.productsInCategory;
              break;
            default: return
          }
        });
        setShopItems(items);
      })
      .catch(err => console.log(err));
  }, []);

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
    basketItems: state.basketItems
  }
}

export default connect(mapStateToProps)(App);
