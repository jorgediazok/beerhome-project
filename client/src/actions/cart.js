import * as actionTypes from '../constants/actionTypes';

export const addToCart = (item, qty) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { item, qty },
  };
};

export const removeFromCart = (id, all = false) =>
  all
    ? { type: actionTypes.REMOVE_ALL_FROM_CART, payload: id }
    : { type: actionTypes.REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: actionTypes.CLEAR_CART });
