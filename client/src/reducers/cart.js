import { ADD_TO_CART, REMOVE_ONE_FROM_CART } from '../constants/actionTypes';

const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...cart, action.payload];
    }

    case REMOVE_ONE_FROM_CART: {
      return cart.filter((item) => item.id !== action.payload.id);
    }

    default:
      return cart;
  }
};

export default cartReducer;
