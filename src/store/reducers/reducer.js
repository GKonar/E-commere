import { FETCH_ITEMS } from '../actions/actions';

const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],
  toys: [],
  hottest: [],
  newest: [],
  basketItems: [],
  basketValue: '',
  numOfBasketItems: ''
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
    default: return state;
  }
}

export default reducer;

