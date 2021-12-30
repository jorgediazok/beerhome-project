import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { adjustQty } from '../actions/cart';
import '../styles/Cart.scss';

import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  console.log(cart);

  const onChangeHandler = (e) => {
    setQty(e.target.value);
  };

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += qty;
      price += qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, qty]);

  return (
    <div className='cart'>
      <div className='cart__items'>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            itemData={item}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalItems={totalItems}
            setTotalItems={setTotalItems}
            qty={qty}
            onChangeHandler={onChangeHandler}
          />
        ))}
      </div>
      <div className='cart__summary'>
        <h4 className='cart__summary__title'>Cart Summary</h4>
        <div className='cart__summary__price'>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className='cart__summary__checkoutBtn'>Terminar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
