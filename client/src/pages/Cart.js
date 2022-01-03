import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Cart.scss';

import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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
        {cartItems.length === 0 ? (
          <div className='cart__no__beer__container'>
            <h1 className='cart__no__beer__message'>
              No hay cervezas en el carro
            </h1>
            <Link to='/tienda'>
              <button className='cart__no__beer__backToStore__button'>
                Ir a la Tienda
              </button>
            </Link>
          </div>
        ) : (
          cartItems?.map((beer, index) => (
            <CartItem key={beer.item.id} itemData={beer} index={index} />
          ))
        )}
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
