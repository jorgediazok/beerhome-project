import * as actionTypes from '../constants/actionTypes';

export const addToCart = (item, qty) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { item, qty },
  };
};
