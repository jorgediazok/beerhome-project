import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from '../constants/actionTypes';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //VERSION QUE FUNCIONA
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem !== action.payload
        ),
      };

    // increasing ites inside cart
    case INCREASE_ITEM:
      let incResults = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      return {
        ...state,
        cartItems: incResults,
      };

    // decrease item inside the cart
    case DECREASE_ITEM:
      let decResults = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...item,
            qty: item.qty === 1 ? (item.qty = 1) : item.qty - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: decResults,
      };

    case CLEAR_CART:
      return { ...initialState };

    default:
      return state;
  }
};

export default cartReducer;
