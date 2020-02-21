import React from 'react'
import { Switch, Route } from "react-router-dom";

import WelcomePage from './pages/WelcomePage/WelcomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ForHimPage from './pages/ForHimPage/ForHimPage';
import ForHerPage from './pages/ForHerPage/ForHerPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopPage from './pages/ShopPage/ShopPage';
import ToysPage from './pages/ToysPage/ToysPage';
import ForHomePage from './pages/ForHomePage/ForHomePage';
import BasketPage from './pages/BasketPage/BasketPage';

function Routes({ products }) {
  console.log('PRODUCTS: ', products);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <WelcomePage products={products} />}
      />
      <Route
        exact
        path="/for-him"
        render={() => <ForHimPage products={products} />}
      />
      <Route
        exact
        path="/for-her"
        render={() => <ForHerPage products={products} />}
      />
      <Route
        exact
        path="/for-home"
        render={() => <ForHomePage products={products} />}
      />
      <Route
        exact
        path="/toys"
        render={() => <ToysPage products={products} />}
      />
      <Route
        exact
        path="/shop"
        render={() => <ShopPage />}
      />
      <Route
        exact
        path="/contact"
        render={() => <ContactPage />}
      />
      <Route
        exact
        path="/about"
        render={() => <AboutPage />}
      />
      <Route
        exact
        path="/product/:id"
        render={(routeProps) => <ProductPage {...routeProps} products={products} />}
      />
      <Route
        exact
        path="/basket"
        render={() => <BasketPage />}
      />
      {/* Last resort path */}
      <Route render={() => <h1>PAGE NOT FOUND :/ Sorry bro</h1>} />}/>
    </Switch>
  )
}

export default Routes;
