import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.scss';

import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  console.log(cartItems);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
      items += item.qty;
      price += item.qty * item.item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className='cart'>
      <div className='cart__items'>
        {cartItems?.map((beer) => (
          <CartItem key={beer.item.id} itemData={beer} />
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
