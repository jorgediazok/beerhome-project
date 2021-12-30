import {
  ADD_TO_CART,
  ADJUST_QTY,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from '../constants/actionTypes';

const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let tempcart = cart.filter((item) => item.id === action.payload.id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    }

    default:
      return cart;
  }
};

export default cartReducer;
