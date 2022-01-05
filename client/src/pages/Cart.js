import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Cart.scss';

import CartItem from '../components/CartItem';

const Cart = ({ totalPrice, totalItems }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/checkout');
  };

  return (
    <div className='cart'>
      <div className='cart__items'>
        {cartItems?.length === 0 ? (
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
          cartItems?.map((beer) => (
            <CartItem key={beer.item.id} itemData={beer} />
          ))
        )}
      </div>
      <div className='cart__summary'>
        <h4 className='cart__summary__title'>En tu carro:</h4>
        <div className='cart__summary__price'>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button
          className='cart__summary__checkoutBtn'
          onClick={handleSubmit}
          disabled={cartItems.length === 0}
        >
          Terminar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
