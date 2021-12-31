import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../constants/actionTypes';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem !== action.payload
        ),
        totalPrice: state.totalPrice - action.payload.price,
      };

    case CLEAR_CART:
      return { ...initialState };

    default:
      return state;
  }
};

export default cartReducer;
