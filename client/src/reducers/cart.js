import * as actionTypes from '../constants/actionTypes';

const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let tempcart = cart.filter((item) => item.id === action.payload.id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    }

    // case actionTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.filter((item) => item.id !== action.payload.id),
    //   };

    default:
      return cart;
  }
};

export default cartReducer;
