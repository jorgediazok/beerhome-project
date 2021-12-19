import React from 'react';
import '../styles/Product.scss';

const ProductSingle = ({ beer }) => {
  return (
    <div className='product__container'>
      <div className='product__left'>
        <div className='product__image__container'>
          <img
            src={beer.fields.image.fields.file.url}
            alt='beer'
            className='product__image'
          />
        </div>
      </div>
      <div className='product__right'>
        <h1 className='product__title'>{beer.fields.name}</h1>
        <span className='product__price'>${beer.fields.price}</span>
        <p className='product__description'>{beer.fields.description}</p>
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
        <button type='submit' className='product__button'>
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default ProductSingle;
