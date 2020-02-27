import { FETCH_ITEMS, ADD_ITEM, REMOVE_ITEM, UPDATE_BASKET, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY } from '../actions/actions';

const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],
  toys: [],
  hottest: [],
  newest: [],
  basketItems: [
    // {
    //   id: "-M0bVB86EddrBtkKWOG9Xb",
    //   description: " Quis iure eligendi ab, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!",
    //   images: ["https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads1_tzw3fh.jpg"],
    //   inStock: true,
    //   name: "Colorful beds [ test ]",
    //   price: "30$",
    //   qty: 1
    // },
  ],
  basketValue: 0,
  numOfBasketItems: 0,
  toFreeDelivery: 150,
}

const reducer = (state = initialState, action) => {
  const { basketItems, basketValue, numOfBasketItems, toFreeDelivery } = state;
  switch (action.type) {
    case FETCH_ITEMS:
      const { forHim, forHer, forHome, toys, newest, hottest } = action.data;
      return {
        ...state,
        forHer,
        forHim,
        forHome,
        toys,
        newest,
        hottest
      }
    case ADD_ITEM:
      // return different state when item is already in basket 
      const duplicate = basketItems.find(item => item.id === action.item.id)

      if (duplicate) {
        duplicate.qty += 1
        return {
          ...state,
          numOfBasketItems: numOfBasketItems + 1,
          toFreeDelivery: toFreeDelivery - action.item.price,
          basketValue: basketValue + action.item.price
        }
      }
      return {
        ...state,
        basketItems: [...basketItems, action.item],
        numOfBasketItems: numOfBasketItems + 1,
        toFreeDelivery: toFreeDelivery - action.item.price,
        basketValue: basketValue + action.item.price
      }
    case REMOVE_ITEM:
      return {
        ...state,
        basketItems: basketItems.filter(item => item.id !== action.item.id),
        numOfBasketItems: numOfBasketItems - (1 * action.item.qty),
        toFreeDelivery: toFreeDelivery + (action.item.price * action.item.qty),
        basketValue: basketValue - action.item.price
      }
    case INCREMENT_ITEM_QUANTITY:
      const itemToIncrement = basketItems.find(item => item.id === action.item.id);
      itemToIncrement.qty += 1;
      return {
        ...state,
        basketItems: [...basketItems],
        numOfBasketItems: numOfBasketItems + 1,
        toFreeDelivery: toFreeDelivery - action.item.price,
        basketValue: basketValue + action.item.price
      }
    case DECREMENT_ITEM_QUANTITY:
      const itemToDecrement = basketItems.find(item => item.id === action.item.id);
      itemToDecrement.qty -= 1;
      return {
        ...state,
        basketItems: [...basketItems],
        numOfBasketItems: numOfBasketItems - 1,
        toFreeDelivery: toFreeDelivery + action.item.price,
        basketValue: basketValue - action.item.price
      }
    case UPDATE_BASKET:
      console.log('Update basket !');
      return {
        ...state
      }

    default: return state;
  }
}

export default reducer;

