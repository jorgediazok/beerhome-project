import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.scss';

import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  console.log(cart);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className='cart'>
      <div className='cart__items'>
        {cart?.map((beer, index) => (
          <CartItem key={index} itemData={beer} />
        ))}
      </div>
      <div className='cart__summary'>
        <h4 className='cart__summary__title'>En tu carro:</h4>
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
