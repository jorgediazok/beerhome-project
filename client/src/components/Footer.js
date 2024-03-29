import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__item'>
        <img
          src='https://i0.wp.com/laderasur.com/wp-content/uploads/2018/07/f376447d-01e3-4f57-8cab-068656e3ca2b.jpg?resize=1136%2C759&ssl=1'
          alt='footer'
          className='footer__image'
        />
      </div>
      <div className='footer__item'>
        <div className='footer__card'>
          <h2 className='footer__motto'>LA CERVEZA VA A TU CASA.</h2>
        </div>
        <div className='footer__card'>
          <h1 className='footer__title'>CONTACTANOS</h1>
          <p className='footer__text'>
            Talcahuano 1095
            <br /> Buenos Aires, 1088
            <br /> (011) 22334455
          </p>
        </div>
        <div className='footer__card'>
          <h1 className='footer__title'>HORARIOS</h1>
          <p className='footer__text'>
            LUNES A VIERNES
            <br /> 9:00 - 18:00
          </p>
          <p className='footer__text'>
            SÁBADOS Y DOMINGOS
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
