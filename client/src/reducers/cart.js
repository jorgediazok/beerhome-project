import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOTAL_ITEMS,
} from '../constants/actionTypes';

const initialState = {
  items: [],
};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    // get initial state
    case GET_ITEMS:
      return {
        ...state,
      };

    //   add items to cart
    // eslint-disable-next-line no-fallthrough
    case ADD_ITEMS:
      let check = state.cart.find((item) => item._id === action.payload);

      if (!check) {
        // bringing only the ites that match the id
        let items = state.items.filter((item) => item._id === action.payload);
        let itemsCart = [...state.cart, ...items];

        return {
          ...state,
          cart: itemsCart,
        };
      } else {
        let items = state.items.filter((item) => item._id === action.payload);

        items.forEach((item) => {
          item.isInCart = true;
          alert(`already in cart`);
        });

        return {
          ...state,
        };
      }

    // delete item
    case DELETE_ITEM:
      const filteredCart = state.cart.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        cart: filteredCart,
      };

    // increasing ites inside cart
    case INCREASE_ITEM:
      let incResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = { ...item, count: item.count + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: incResults,
      };

    // decrease item inside the cart
    case DECREASE_ITEM:
      let decResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = {
            ...item,
            count: item.count === 1 ? (item.count = 1) : item.count - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: decResults,
      };

    //get total price
    case TOTAL_ITEMS:
      const totals = state.cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);

      return {
        ...state,
        total: totals,
      };

    default:
      return state;
  }
};

export default Todos;
