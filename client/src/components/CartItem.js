import React, { useState } from 'react';
import '../styles/CartItem.scss';

const CartItem = ({ itemData }) => {
  const [input, setInput] = useState(itemData);
  console.log(itemData);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

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
          <label htmlFor='qty'>Qty</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          // onClick={() => removeFromCart(itemData.id)}
          className='cartItem__actions__deleteItemBtn'
        >
          <img
            src='https://image.flaticon.com/icons/svg/709/709519.svg'
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
