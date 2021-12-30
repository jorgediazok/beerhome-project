import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';
import Client from '../api/api';
import '../styles/TiendaDetails.scss';

const TiendaDetails = () => {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  //REDUX
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

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
            <div className='btn-cart-container'>
              <button
                onClick={() => dispatch(addToCart(beer))}
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
