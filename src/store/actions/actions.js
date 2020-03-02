import axios from '../../axios';

// actions identifires 
export const FETCH_PAGE_ITEMS = 'FETCH_PAGE_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_BASKET = 'UPDATE_BASKET';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';
export const SET_DISCOUNT = 'SET_DISCOUNT';

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

export const updateBasket = (item) => {
  return {
    type: UPDATE_BASKET,
    item
  }
}

// async action creators
export const fetchPageItems = (page) => {
  return dispatch => {
    axios.get(`/products/${page}.json`)
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