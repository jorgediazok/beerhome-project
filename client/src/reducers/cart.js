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
      let index = state.cartItems.findIndex(
        (product) => product.item.id === action.payload
      );

      state.cartItems[index] = {
        ...state.cartItems[index],
        qty: state.cartItems[index].qty + 1,
      };

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    // decrease item inside the cart
    case DECREASE_ITEM:
      let idx = state.cartItems.findIndex(
        (product) => product.item.id === action.payload
      );

      state.cartItems[idx] = {
        ...state.cartItems[idx],
        qty:
          state.cartItems[idx].qty === 1
            ? (state.cartItems[idx].qty = 1)
            : state.cartItems[idx].qty - 1,
      };

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case CLEAR_CART:
      return { ...initialState };

    default:
      return state;
  }
};

export default cartReducer;
