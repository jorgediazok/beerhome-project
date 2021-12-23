import React from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../utils/Pagination';
import '../styles/Products.scss';

const Tienda = ({ paginate, currentBeers, beersPerPage, totalBeers }) => {
  return (
    <div className='products__container'>
      <div className='products__list'>
        {currentBeers.map((beer) => (
          <ProductCard key={beer.fields.id} beer={beer} />
        ))}
      </div>
      <Pagination
        paginate={paginate}
        beersPerPage={beersPerPage}
        totalBeers={totalBeers}
      />
    </div>
  );
};

export default Tienda;
