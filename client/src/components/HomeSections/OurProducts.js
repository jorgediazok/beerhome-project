import React from 'react';
import ProductCard from './ProductCard';
import '../../styles/OurProducts.scss';

const OurProducts = ({ beers, setBeers }) => {
  return (
    <div className='products__container'>
      <h1 className='products__title'>Las mejores cervezas del mundo</h1>
      <p className='products__description'>
        Importadas desde los países con más tradición cervecera y bajo estrictos
        estándares de calidad. No te pierdas las mejores ofertas para este
        verano
      </p>
      <div className='products__wrapper'>
        <ProductCard beers={beers} setBeers={setBeers} />
      </div>
    </div>
  );
};

export default OurProducts;
