import React, { useState } from 'react';
import '../../styles/Contacto.scss';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//TOAST CONFIGURATION
toast.configure();

//TOAST FUNCTION
const notify = () => {
  toast('Mensaje enviado. Te contestamos a la brevedad. Gracias!', {
    position: toast.POSITION.TOP_LEFT,
  });
};

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contacto = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialState);
    notify();
  };

  return (
    <div className='contact' id='contacto'>
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
              <input
                type='text'
                name='name'
                required='required'
                onChange={handleChange}
              />
              <span>Nombre</span>
            </div>
            <div className='contact__form__input'>
              <input
                type='email'
                name='email'
                required='required'
                onChange={handleChange}
              />
              <span>Email</span>
            </div>
            <div className='contact__form__input'>
              <textarea
                required='required'
                name='message'
                onChange={handleChange}
              />
              <span>Mensaje</span>
            </div>
            <div className='contact__form__input'>
              <input
                type='submit'
                name=''
                value='Enviar'
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
