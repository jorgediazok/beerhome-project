import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = ({ totalItems, totalPrice }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    time: '',
    creditCardNumber: '',
    date: '',
    code: '',
  });
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
        <p>Por favor ingrese sus datos</p>
      </div>
      <div className='contact__container'>
        <div className='contact__form'>
          <form>
            <h2 className='contact__form__title'>Paso N° {count} de 3</h2>
            {count === 1 ? (
              <>
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

                <div className='contact__form__input'>
                  <input
                    type='tel'
                    maxLength={10}
                    name='phone'
                    required='required'
                    value={form.phone}
                    onChange={updateForm}
                  />
                  <span>Teléfono</span>
                </div>

                <div className='contact__form__input'>
                  <input
                    type='email'
                    name='email'
                    required='required'
                    value={form.email}
                    onChange={updateForm}
                  />
                  <span>Email</span>
                </div>
              </>
            ) : null}

            {count === 2 ? (
              <>
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

                <div className='contact__form__input'>
                  <input
                    type='number'
                    name='zipCode'
                    required='required'
                    value={form.zipCode}
                    onChange={updateForm}
                  />
                  <span>Código Postal</span>
                </div>

                <div className='contact__form__input'>
                  <input
                    type='text'
                    name='time'
                    required='required'
                    value={form.time}
                    onChange={updateForm}
                  />
                  <span>Horario de Entrega</span>
                </div>
              </>
            ) : null}

            {count === 3 ? (
              <>
                <h1
                  style={{
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginTop: '30px',
                    textDecoration: 'underline',
                  }}
                >
                  Su Compra:
                </h1>
                <div>
                  {cartItems.map((item) => (
                    <>
                      <p
                        key={item.id}
                        style={{ textAlign: 'center', marginTop: '20px' }}
                      >
                        {item.item.name} x {item.qty} unidades 🍺{' '}
                      </p>
                    </>
                  ))}
                  <p style={{ textAlign: 'center' }}>
                    Total a Pagar: <b>$ {totalPrice}</b>
                  </p>
                </div>

                <h1
                  style={{
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginTop: '40px',
                    marginBottom: '20px',
                    textDecoration: 'underline',
                  }}
                >
                  Pago:
                </h1>
                <div className='contact__form__input'>
                  <input
                    type='tel'
                    name='creditCardNumber'
                    required='required'
                    maxLength={16}
                    minLength={16}
                    value={form.creditCardNumber}
                    onChange={updateForm}
                  />
                  <span>Número de Tarjeta</span>
                </div>

                <div className='contact__form__input'>
                  <input
                    type='date'
                    name='date'
                    required='required'
                    value={form.date}
                    onChange={updateForm}
                  />
                  <span>Fecha de Vencimiento</span>
                </div>

                <div className='contact__form__input'>
                  <input
                    type='tel'
                    name='code'
                    required='required'
                    value={form.code}
                    maxlength={3}
                    onChange={updateForm}
                  />
                  <span>Código (3 números)</span>
                </div>

                <div className='contact__form__input'>
                  <input type='submit' name='' value='Enviar' />
                </div>
              </>
            ) : null}
          </form>

          <div className='contact__form__buttons__container'>
            {count === 2 || count === 3 ? (
              <div className='contact__form__input'>
                <input
                  type='submit'
                  name='volver'
                  value='Volver'
                  onClick={() => setCount(count - 1)}
                  disabled={count < 2}
                />
              </div>
            ) : null}

            {count === 1 || count === 2 ? (
              <div className='contact__form__input'>
                <input
                  type='submit'
                  name=''
                  value='Continuar'
                  onClick={() => setCount(count + 1)}
                  disabled={count > 2}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
