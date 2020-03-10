import React from 'react'
import { Switch, Route } from "react-router-dom";

import WelcomePage from './pages/WelcomePage/WelcomePage';
import ProductPage from './pages/ProductPage/ProductPage'; // to add after whole refactor
import AboutPage from './pages/AboutPage/AboutPage';
import ForHimPage from './pages/ForHimPage/ForHimPage';
import ForHerPage from './pages/ForHerPage/ForHerPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopPage from './pages/ShopPage/ShopPage';
import ToysPage from './pages/ToysPage/ToysPage';
import ForHomePage from './pages/ForHomePage/ForHomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentSuccess from './pages/CheckoutPage/PaymentSuccess';

function Routes({ products }) {
  const { forHer, forHim, forHome, toys, newest, hottest } = products;
  const pageProducts = [...newest, ...forHer, ...forHim, ...forHome, ...toys, ...hottest];
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <WelcomePage />}
      />
      <Route
        exact
        path="/for-him"
        render={() => <ForHimPage />}
      />
      <Route
        exact
        path="/for-her"
        render={() => <ForHerPage />}
      />
      <Route
        exact
        path="/for-home"
        render={() => <ForHomePage />}
      />
      <Route
        exact
        path="/toys"
        render={() => <ToysPage />}
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
        render={(routeProps) => <ProductPage {...routeProps} products={pageProducts} />}
      />
      <Route
        exact
        path="/basket"
        render={() => <BasketPage />}
      />
      <Route
        exact
        path="/checkout"
        render={() => <CheckoutPage />}
      />
      <Route
        exact
        path="/payment-success"
        render={() => <PaymentSuccess />}
      />
      {/* Last resort path */}
      <Route render={() => <h1>PAGE NOT FOUND :/ Sorry bro</h1>} />}/>
    </Switch>
  )
}

export default Routes;
