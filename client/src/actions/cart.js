import * as actionTypes from '../constants/actionTypes';

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  };
};
