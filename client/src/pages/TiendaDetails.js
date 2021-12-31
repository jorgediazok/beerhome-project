import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';
import Client from '../api/api';
//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//STYLES
import '../styles/TiendaDetails.scss';

const TiendaDetails = () => {
  const [cantidad, setCantidad] = useState(1);
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  //TOAST CONFIGURATION
  toast.configure();

  //TOAST FUNCTION
  const notify = () => {
    toast('Cerveza agregada', {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  //REDUX
  const dispatch = useDispatch();

  const addItem = (item, qty) => {
    dispatch(addToCart(item, qty));
    notify();
  };

  const handleAdd = () => {
    setCantidad(cantidad + 1);
  };
  const handleRemove = () => {
    if (cantidad === 0) {
      return;
    } else {
      setCantidad(cantidad - 1);
    }
  };

  //CALLING THE API TO GET SINGLE PRODUCT
  const getBeer = useCallback(async () => {
    try {
      let response = await Client.getEntry(id);
      setBeer(response.fields);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    getBeer();
  }, [getBeer]);

  useEffect(() => {
    window.scrollTo(0, 40);
  }, []);

  return (
    <div className='product__container'>
      <div className='product__left'>
        <div className='product__image__container'>
          <img
            src={beer?.image?.fields?.file?.url}
            alt=''
            className='product__image'
          />
        </div>
      </div>
      <div className='product__right'>
        <h1 className='product__title'>{beer.name}</h1>
        <span className='product__price'>${beer.price}</span>
        <p className='product__description'>{beer.descriptionExtended}</p>
        <div className='product__itemCount'>
          <div className='itemCount'>
            <div className='btn-container'>
              <button onClick={handleAdd} className='btn-counter'>
                +
              </button>
              <p className='counter'>{cantidad}</p>
              <button onClick={handleRemove} className='btn-counter'>
                -
              </button>
            </div>
            <div className='btn-cart-container'>
              <button
                onClick={() => addItem(beer, cantidad)}
                className='btn-cart'
              >
                Agregar Al Carro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaDetails;
