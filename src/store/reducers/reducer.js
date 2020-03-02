import { FETCH_PAGE_ITEMS, ADD_ITEM, REMOVE_ITEM, UPDATE_BASKET, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY, SET_DISCOUNT } from '../actions/actions';

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
  hasDiscount: false,
}

const reducer = (state = initialState, action) => {
  const { basketItems, basketValue, numOfBasketItems, toFreeDelivery, hasDiscount } = state;
  switch (action.type) {
    case FETCH_PAGE_ITEMS:
      // handle discount codes
      if (hasDiscount) {
        const dataAfterDiscount = action.data.map(item => {
          return {
            ...item,
            price: Math.round(item.price * 0.8)
          }
        })
        return {
          ...state,
          [action.page]: dataAfterDiscount,
          toFreeDelivery: 0,
        }
      }
      return {
        ...state,
        [action.page]: action.data
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
          basketItems: updatedItems,
        }
      }
      if (hasDiscount) {
        return {
          ...state,
          basketItems: [...basketItems, action.item],
          numOfBasketItems: numOfBasketItems + 1,
          toFreeDelivery: toFreeDelivery - action.item.price,
          basketValue: basketValue + action.item.price * 0.8
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
      const setBasketValue = () => {
        if (basketItems.length <= 1) {
          return 0;
        } else {
          return basketValue - (action.item.price * action.item.qty)
        }
      }
      // handle discount
      if (hasDiscount) {
        return {
          ...state,
          basketItems: basketItems.filter(item => item.id !== action.item.id),
          numOfBasketItems: numOfBasketItems - (1 * action.item.qty),
          toFreeDelivery: 0,
          basketValue: setBasketValue(),
        }
      }

      return {
        ...state,
        basketItems: basketItems.filter(item => item.id !== action.item.id),
        numOfBasketItems: numOfBasketItems - (1 * action.item.qty),
        toFreeDelivery: toFreeDelivery + (action.item.price * action.item.qty),
        basketValue: setBasketValue()
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
          price: Math.round(item.price * 0.8)
        }
      });
      return {
        ...state,
        basketItems: basketItemsAfterDiscount,
        basketValue: Math.round(basketValue * 0.8),
        toFreeDelivery: 0,
        hasDiscount: true
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

