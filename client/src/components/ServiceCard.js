import React from 'react';
import '../styles/OurServices.scss';

const ServiceCard = ({ icon, service, description }) => {
  return (
    <div className='services__card'>
      <div className='services__box'>
        <i className={icon}></i>
        <h3>{service}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
