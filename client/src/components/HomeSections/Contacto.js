import React from 'react';
import '../../styles/Contacto.scss';

const Contacto = () => {
  return (
    <div className='contact'>
      <div className='contact__content'>
        <h1>Contactános</h1>
        <p>
          Hacenos tu consulta o pedido, te respondemos siempre lo más pronto
          posible
        </p>
      </div>
      <div className='contact__container'>
        <div className='contact__contactInfo'>
          <div className='contact__box'>
            <div className='contact__icon'>
              <i className='fa fa-map-marker'></i>
            </div>
            <div className='contact__text'>
              <h3>Dirección</h3>
              <p>Talcahuano 1095, Buenos Aires.</p>
            </div>
          </div>
          <div className='contact__box'>
            <div className='contact__icon'>
              <i className='fab fa-whatsapp'></i>
            </div>
            <div className='contact__text'>
              <h3>Whatsapp</h3>
              <p> (011) 22334455</p>
            </div>
          </div>
          <div className='contact__box'>
            <div className='contact__icon'>
              <i className='fa fa-envelope'></i>
            </div>
            <div className='contact__text'>
              <h3>Email</h3>
              <p>beerhouse@craftbeer.com</p>
            </div>
          </div>
        </div>
        <div className='contact__form'>
          <form>
            <h2 className='contact__form__title'>Enviar Mensaje</h2>
            <div className='contact__form__input'>
              <input type='text' name='' required='required' />
              <span>Nombre</span>
            </div>
            <div className='contact__form__input'>
              <input type='email' name='' required='required' />
              <span>Email</span>
            </div>
            <div className='contact__form__input'>
              <textarea required='required' name='' />
              <span>Mensaje</span>
            </div>
            <div className='contact__form__input'>
              <input type='submit' name='' value='Enviar' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
