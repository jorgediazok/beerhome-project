import React from 'react';
import '../../styles/OurServices.scss';
import ServiceCard from '../ServiceCard';

const OurServices = () => {
  const servicesData = [
    {
      icon: 'fas fa-beer',
      service: 'World Beers',
      description:
        'Cervezas importadas de todo el mundo. Rubias, rojas, doradas, negras. Para todo gusto.',
    },
    {
      icon: 'fas fa-truck',
      service: 'Envíos a Domicilio',
      description:
        'Te llevamos las cervezas que quieras a donde quieras, para que no te falte nunca una birra.',
    },
    {
      icon: 'fas fa-gift',
      service: 'Regalá Cerveza',
      description:
        '¿Tenés un cumpleaños y no sabés que regalar? Consultá nuestros packs especiales de regalos.',
    },
    {
      icon: 'far fa-id-card',
      service: 'Hacéte miembro',
      description:
        'Asociete al Club Beerhouse y recibí novedades, descuentos y participá de sorteos.',
    },
  ];

  return (
    <div className='services'>
      <div className='services__container'>
        <h1>Nuestros Servicios</h1>
        <div className='services__content'>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.service}
              icon={service.icon}
              service={service.service}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
