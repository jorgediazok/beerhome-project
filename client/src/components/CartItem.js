import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_ONE_FROM_CART } from '../constants/actionTypes';
import '../styles/CartItem.scss';

const CartItem = ({ itemData }) => {
  const [cantidad, setCantidad] = useState(itemData.qty);
  const dispatch = useDispatch();
  console.log(itemData);

  const changeQuantity = (e) => {
    setCantidad(e.target.value);
  };

  return (
    <div className='cartItem'>
      <img
        className='cartItem__image'
        src={itemData.item.image.fields.file.url}
        alt={itemData.item.name}
      />
      <div className='cartItem__details'>
        <p className='cartItem__details__title'>{itemData.item.name}</p>
        <p className='cartItem__details__description'>
          {itemData.item.description}
        </p>
        <p className='cartItem__details__price'>$ {itemData.item.price}</p>
      </div>
      <div className='cartItem__actions'>
        <div className='cartItem__qty'>
          <label htmlFor='qty'>Cantidad</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            onChange={changeQuantity}
            value={cantidad}
          />
        </div>
        <button
          onClick={() =>
            dispatch({ type: REMOVE_ONE_FROM_CART, payload: itemData })
          }
          className='cartItem__actions__deleteItemBtn'
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
