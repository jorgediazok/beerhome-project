import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem } from '../actions/cart';
import { REMOVE_FROM_CART } from '../constants/actionTypes';
import '../styles/CartItem.scss';

const CartItem = ({ itemData, index }) => {
  const { cartItems } = useSelector((state) => state.cart);
  // const [cantidad, setCantidad] = useState(itemData.qty);
  const dispatch = useDispatch();

  console.log(index);
  console.log(cartItems);

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
        <p className='cartItem__details__price'>
          Precio p/u: <br /> <b>$ {itemData.item.price}</b>
        </p>
      </div>
      <div className='cartItem__actions'>
        <label htmlFor='qty'>Cantidad</label>
        <div className='cartItem__qty'>
          <button onClick={() => dispatch(decreaseItem(itemData.item.id))}>
            -
          </button>
          <span>{itemData.qty}</span>
          <button onClick={() => dispatch(increaseItem(itemData.item.id))}>
            +
          </button>
        </div>
        <button
          onClick={() =>
            dispatch({
              type: REMOVE_FROM_CART,
              payload: itemData,
            })
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
