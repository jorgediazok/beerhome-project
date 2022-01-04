import * as actionTypes from '../constants/actionTypes';

export const addToCart = (item, qty) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { item, qty },
  };
};

export const increaseItem = (id, qty) => {
  return {
    type: actionTypes.INCREASE_ITEM,
    payload: id,
  };
};

export const decreaseItem = (id) => {
  return {
    type: actionTypes.DECREASE_ITEM,
    payload: id,
  };
};
