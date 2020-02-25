import { FETCH_ITEMS, ADD_ITEM } from '../actions/actions';

const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],
  toys: [],
  hottest: [],
  newest: [],
  basketItems: [],
  basketValue: '',
  numOfBasketItems: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        forHer: action.data.forHer,
        forHim: action.data.forHim,
        forHome: action.data.forHome,
        toys: action.data.toys,
        newest: action.data.newest,
        hottest: action.data.hottest,
      }
    case ADD_ITEM:
      return {
        ...state,
        basketItems: [...state.basketItems, action.item],
        numOfBasketItems: state.basketItems.length + 1
      }

    default: return state;
  }
}

export default reducer;

