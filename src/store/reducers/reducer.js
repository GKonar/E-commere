import { FETCH_ITEMS, ADD_ITEM, REMOVE_ITEM, UPDATE_BASKET, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY } from '../actions/actions';

const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],
  toys: [],
  hottest: [],
  newest: [],
  basketItems: [
    {
      id: "-M0bVB86EddrBtkKWOG9Xb",
      description: " Quis iure eligendi ab, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!",
      images: ["https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads1_tzw3fh.jpg"],
      inStock: true,
      name: "Colorful beds [ test ]",
      price: "30$",
      qty: 1
    },
  ],
  basketValue: '',
  numOfBasketItems: 0,
  toFreeDelivery: 150,
}

const reducer = (state = initialState, action) => {
  const { forHim, forHer, forHome, toys, hottest, newest, basketItems, basketValue, numOfBasketItems, toFreeDelivery } = state;
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
      return {
        ...state,
        basketItems: [...basketItems, action.item],
        numOfBasketItems: basketItems.length + 1,
        toFreeDelivery: toFreeDelivery - parseInt(action.item.price)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        basketItems: basketItems.filter(item => item.id !== action.item.id),
        numOfBasketItems: basketItems.length - 1,
        toFreeDelivery: toFreeDelivery + parseInt(action.item.price)
      }
    case INCREMENT_ITEM_QUANTITY:
      console.log('Incrementing...');
      const item = basketItems.find(item => item.id === action.item.id);
      item.qty += 1;
      return {
        ...state,
        basketItems: [...basketItems],
        numOfBasketItems: state.numOfBasketItems + 1
      }
    case DECREMENT_ITEM_QUANTITY:
      console.log('Decrementing...', action.item);
      return {
        ...state
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

