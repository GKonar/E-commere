const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],

  basketItems: [],
  basketValue: '',
  numOfBasketItems: ''
}

const reducer = (state = initialState, actions) => {
  return state;
}

export default reducer;

/*
 ADD_TO_BASKET:
 update immutably basketItems [...state.basketItmes, item]
*/

/*
REMOVE_FROM_BASKET:
  using filter or splice
  remove item from basket based on its id
 */

/*
UPDATE_BASKET:
 update basketValue,
 update numOfBasketItems,
 take care of duplicate items
*/
