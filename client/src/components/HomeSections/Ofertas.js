import React from 'react';
import OfertaCard from '../OfertaCard';
import '../../styles/OurProducts.scss';
// import Loading from '../../assets/beer.gif';

const Ofertas = ({ beers, setBeers, loading }) => {
  return (
    <div className='products__container' id='ofertas'>
      <h1 className='products__title'>Cervezas En Oferta</h1>
      <p className='products__description'>
        Importadas desde los países con más tradición cervecera y bajo estrictos
        estándares de calidad. No te pierdas las mejores ofertas para este
        verano
      </p>
      <div className='products__wrapper animate__animated animate__fadeIn'>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <OfertaCard beers={beers} setBeers={setBeers} />
        )}
      </div>
    </div>
  );
};

export default Ofertas;
