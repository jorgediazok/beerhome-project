import React from 'react';
import '../../styles/OurServices.scss';
import ServiceCard from '../ServiceCard';

const OurServices = () => {
  return (
    <div className='services'>
      <div className='services__container'>
        <h1>Nuestros Servicios</h1>
        <div className='services__content'>
          <ServiceCard
            icon='fas fa-beer'
            service='World Beers'
            description='Cervezas importadas de todo el mundo. Rubias, rojas, doradas, negras. Para todo gusto.'
          />
          <ServiceCard
            icon='fas fa-truck'
            service='Envíos a Domicilio'
            description='Te llevamos las cervezas que quieras a donde quieras, para que no te falte nunca una birra.'
          />
          <ServiceCard
            icon='fas fa-gift'
            service='Regalá Cerveza'
            description='¿Tenés un cumpleaños y no sabés que regalar? Consultá nuestros packs especiales de regalos.'
          />
          <ServiceCard
            icon='far fa-id-card'
            service='Hacete Miembro'
            description='Asociete al Club Beerhouse y recibí novedades, descuentos y participá de sorteos.'
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
