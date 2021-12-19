import React from 'react';
import '../styles/ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ beer }) => {
  return (
    <div className='product__card'>
      <Link to={`/products/${beer.fields.id}`}>
        <div className='product__card__body'>
          <img
            src={beer.fields.image.fields.file.url}
            alt='beer'
            className='product__card__img__top'
          />
          <h3 className='product__card__title'>{beer.fields.name}</h3>
          <span className='product__card__price'>$ {beer.fields.price}</span>
        </div>
        <div className='product__card__button'>
          <button className='hero-button'>AGREGAR</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
