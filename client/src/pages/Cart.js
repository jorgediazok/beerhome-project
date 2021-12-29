import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSele, useSelector } from 'react-redux';
import '../styles/Cart.scss';

import CartItem from '../components/CartItem';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
        {cart.map((item, index) => (
          <CartItem key={index} itemData={item} />
        ))}
      </div>
      <div className='cart__summary'>
        <h4 className='cart__summary__title'>Cart Summary</h4>
        <div className='cart__summary__price'>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className='cart__summary__checkoutBtn'>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
