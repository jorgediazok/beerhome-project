import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../api/api';
import '../styles/ProductSingle.scss';

const ProductSingle = ({ beers }) => {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  //CALLING THE API TO GET SINGLE PRODUCT
  const getBeer = async () => {
    try {
      let response = await Client.getEntry(id);
      setBeer(response.fields);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  console.log(beer);

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
        <h3 className='product__choose'>Elija la cantidad</h3>
        <div className='product__quantity'>
          <div className='product__options'>
            <select
              type='select'
              id='quantity'
              name='quantity'
              className='product__input'
            />
          </div>
        </div>
        <button type='submit' className='hero-button'>
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default ProductSingle;
