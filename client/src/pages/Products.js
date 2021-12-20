import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.scss';

const Products = ({ beers }) => {
  return (
    <div className='products__container'>
      <div className='products__list'>
        {beers.map((beer) => (
          <ProductCard key={beer.fields.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Products;
