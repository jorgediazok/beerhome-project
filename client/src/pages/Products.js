import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.scss';

//NECESITO CARDS PARA MI CATALOGO, UNA UI, CUANDO CLICKEO EN ESAS CARDS, ME
//LEVA A PRODUCT SINGLE. PERO, de mientras, no me sirve aca. CREO OTRA CARD.

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
