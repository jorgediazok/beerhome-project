import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = ({ totalItems, totalPrice }) => {
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [count, setCount] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='contact' id='contacto'>
      <div className='contact__content'>
        <h1 style={{ marginTop: '70px' }}>Confirmar Compra</h1>
        <p>Ingrese sus datos por favor</p>
      </div>
      <div className='contact__container'>
        <div className='contact__form'>
          <form>
            <h2 className='contact__form__title'>Paso N° {count} de 3</h2>
            {count === 1 ? (
              <div className='contact__form__input'>
                <input
                  type='text'
                  name='name'
                  required='required'
                  onChange={updateForm}
                  value={form.name}
                />
                <span>Nombre</span>
              </div>
            ) : null}

            {count === 2 ? (
              <div className='contact__form__input'>
                <input
                  type='number'
                  name='phone'
                  required='required'
                  value={form.phone}
                  onChange={updateForm}
                />
                <span>Teléfono</span>
              </div>
            ) : null}

            {count === 3 ? (
              <div className='contact__form__input'>
                <input
                  type='text'
                  name='address'
                  required='required'
                  value={form.address}
                  onChange={updateForm}
                />
                <span>Dirección</span>
              </div>
            ) : null}

            <div className='contact__form__input'>
              <input type='submit' name='' value='Enviar' />
            </div>
          </form>

          <div className='contact__form__buttons__container'>
            <div className='contact__form__input'>
              <input
                type='submit'
                name=''
                value='Volver'
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              />
            </div>

            <div className='contact__form__input'>
              <input
                type='submit'
                name=''
                value='Continuar'
                onClick={() => setCount(count + 1)}
                disabled={count > 2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
