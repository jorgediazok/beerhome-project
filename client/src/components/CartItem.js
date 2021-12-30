import React from 'react';
import { removeFromCart } from '../actions/cart';
import '../styles/CartItem.scss';

const CartItem = ({ itemData, qty, onChangeHandler }) => {
  return (
    <div className='cartItem'>
      <img
        className='cartItem__image'
        src={itemData.image.fields.file.url}
        alt={itemData.name}
      />
      <div className='cartItem__details'>
        <p className='cartItem__details__title'>{itemData.name}</p>
        <p className='cartItem__details__description'>{itemData.description}</p>
        <p className='cartItem__details__price'>$ {itemData.price}</p>
      </div>
      <div className='cartItem__actions'>
        <div className='cartItem__qty'>
          <label htmlFor='qty'>Cantidad</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={qty}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(itemData.id)}
          className='cartItem__actions__deleteItemBtn'
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
