import { FETCH_ITEMS, ADD_ITEM, REMOVE_ITEM, UPDATE_BASKET, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY, SET_DISCOUNT } from '../actions/actions';

const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],
  toys: [],
  hottest: [],
  newest: [],
  basketItems: [],
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
        const updatedItems = basketItems.map(item => {
          if (item.id === action.item.id) {
            return {
              ...item,
              qty: item.qty + 1
            }
          }
          return item;
        })
        return {
          ...state,
          numOfBasketItems: numOfBasketItems + 1,
          toFreeDelivery: toFreeDelivery - action.item.price,
          basketValue: basketValue + action.item.price,
          basketItems: updatedItems
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
        basketValue: basketValue - (action.item.price * action.item.qty)
      }
    case INCREMENT_ITEM_QUANTITY:
      const basketAfterIncrement = basketItems.map(item => {
        if (item.id === action.item.id) {
          return {
            ...item,
            qty: item.qty + 1
          }
        }
        return item;
      })
      return {
        ...state,
        basketItems: basketAfterIncrement,
        numOfBasketItems: numOfBasketItems + 1,
        toFreeDelivery: toFreeDelivery - action.item.price,
        basketValue: basketValue + action.item.price
      }
    case DECREMENT_ITEM_QUANTITY:
      const basketAfterDecrement = basketItems.map(item => {
        if (item.id === action.item.id) {
          return {
            ...item,
            qty: item.qty - 1
          }
        }
        return item;
      })
      return {
        ...state,
        basketItems: basketAfterDecrement,
        numOfBasketItems: numOfBasketItems - 1,
        toFreeDelivery: toFreeDelivery + action.item.price,
        basketValue: basketValue - action.item.price
      }
    case SET_DISCOUNT:
      const basketItemsAfterDiscount = basketItems.map(item => {
        return {
          ...item,
          price: Math.round(item.price * 0.8) // TODO
        }
      });
      return {
        ...state,
        basketItems: basketItemsAfterDiscount,
        basketValue: Math.round(basketValue * 0.8), //TODO
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

