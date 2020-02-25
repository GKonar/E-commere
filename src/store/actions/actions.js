import axios from '../../axios';
// actions identifires 
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM'

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

// basket funcionality DEV
export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
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
          // cerating an object category: category-items[]
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