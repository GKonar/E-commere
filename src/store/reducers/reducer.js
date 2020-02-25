import { FETCH_ITEMS, ADD_ITEM } from '../actions/actions';

const initialState = {
  forHer: [],
  forHim: [],
  forHome: [],
  toys: [],
  hottest: [],
  newest: [],
  basketItems: [
    {
      id: "-M0bVB86ErBtkKWOG9Xb",
      description: " Quis iure eligendi ab, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!",
      images: ["https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads1_tzw3fh.jpg"],
      inStock: true,
      name: "Colorful beds",
      price: "30$"
    }
  ],
  basketValue: '',
  numOfBasketItems: 0,
  toFreeDelivery: 150,
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
        numOfBasketItems: state.basketItems.length + 1,
        toFreeDelivery: state.toFreeDelivery - parseInt(action.item.price)
      }

    default: return state;
  }
}

export default reducer;

