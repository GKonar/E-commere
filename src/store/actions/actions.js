import axios from '../../axios';
// actions identifires 
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_BASKET = 'UPDATE_BASKET';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';

// sync action creators 
const saveItems = (data) => {
  return {
    type: FETCH_ITEMS,
    data
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

export const updateBasket = (item) => {
  return {
    type: UPDATE_BASKET,
    item
  }
}

// async action creators
export const fetchItems = (data) => {
  return dispatch => {
    let items = {}
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
          // Cerating an items object with shape: categoryName: category-items[]
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
        data = items;
        dispatch(saveItems(data));
      })
      .catch(err => console.log(err));
  }
}