import { instance } from '../../axios';
import axios from 'axios';

// actions identifires 
export const FETCH_PAGE_ITEMS = 'FETCH_PAGE_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';
export const SET_DISCOUNT = 'SET_DISCOUNT';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// sync action creators 
const savePageItems = (data, page) => {
  return {
    type: FETCH_PAGE_ITEMS,
    data,
    page
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item
  }
}

export const incrementItemQuantity = (item) => {
  return {
    type: INCREMENT_ITEM_QUANTITY,
    item
  }
}

export const decrementItemQuantity = (item) => {
  return {
    type: DECREMENT_ITEM_QUANTITY,
    item
  }
}

export const setDiscount = (basketValue) => {
  return {
    type: SET_DISCOUNT,
    basketValue
  }
}

export const clearBasket = () => {
  return {
    type: CLEAR_BASKET,
  }
}

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = (idToken, userId) => {
  return {
    type: AUTH_SUCCESS,
    idToken,
    userId
  }
}

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error
  }
}

export const logout = () => {
  return {
    type: AUTH_LOGOUT
  }
}

// async action creators
export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    // auto logout after expiration time pass
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
}

export const auth = (email, password, mode) => { // mode - singup or login
  // console.log(email, password, mode) // DEV
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnecAp8bG-KwhlHm_a0AaQFaGLkhiZakc';
    if (mode === 'login') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnecAp8bG-KwhlHm_a0AaQFaGLkhiZakc';
    }
    axios.post(url, authData)
      .then((response) => {
        // console.log(response) // DEV
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        // console.log(err.response.data.error.message); // DEV
        // console.log(err.response); // DEV
        dispatch(authFail(err.response.data.error));
      })
  }
}

export const fetchPageItems = (page) => {
  return dispatch => {
    instance.get(`/products/${page}.json`)
      .then(res => {
        let pageProducts = res.data;
        pageProducts = Object.entries(pageProducts);
        pageProducts = pageProducts.map(p => {
          return {
            id: p[0],
            ...p[1]
          }
        })
        dispatch(savePageItems(pageProducts, page));
      })
      .catch(err => console.log(err));
  }
}