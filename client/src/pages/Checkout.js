import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import { useSelector } from 'react-redux';
import '../styles/Checkout.scss';

const Checkout = ({ totalPrice }) => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    document: '',
    address: '',
    zipCode: '',
    time: '',
    creditCardNumber: '',
    date: '',
    code: '',
  });
  const [count, setCount] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);

  const MySwal = withReactContent(Swal);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem('products');

    MySwal.fire({
      title: <p>Hello World</p>,
      footer: 'Copyright 2018',
      didOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm();
      },
    })
      .then(() => {
        return MySwal.fire(
          <>
            <h2>Compra Confirmada</h2>
            <p>Le enviamos un mail con su orden.</p>
          </>
        );
      })
      .then(() => {
        history.go('/');
      });

    history.push('/');
  };

  return (
    <div className='contact' id='contacto'>
      <div className='contact__content'>
        <h1 style={{ marginTop: '70px' }}>Confirmar Compra</h1>
        <p>Por favor ingrese sus datos</p>
      </div>
      <div className='contact__container'>
        <div className='contact__form'>
          <form onSubmit={handleSubmit}>
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
                    type='tel'
                    maxLength={8}
                    name='document'
                    required='required'
                    value={form.document}
                    onChange={updateForm}
                  />
                  <span>Documento</span>
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
                    maxLength={3}
                    onChange={updateForm}
                  />
                  <span>Código (3 números)</span>
                </div>
              </>
            ) : null}

            <div className='checkout__form__buttons__container'>
              {count === 3 ? (
                <div className='checkout__form__input'>
                  <button
                    type='submit'
                    name='pagar'
                    className='checkout__form__input__button '
                  >
                    Pagar
                  </button>
                </div>
              ) : null}

              {count === 2 || count === 3 ? (
                <div className='checkout__form__input'>
                  <button
                    className='checkout__form__input__button'
                    type='submit'
                    name='volver'
                    value='Volver'
                    onClick={() => setCount(count - 1)}
                    disabled={count < 2}
                  >
                    Volver
                  </button>
                </div>
              ) : null}

              {count === 1 || count === 2 ? (
                <div className='checkout__form__input'>
                  <button
                    type='submit'
                    className='checkout__form__input__button'
                    name='continuar'
                    onClick={() => setCount(count + 1)}
                    disabled={count > 2}
                  >
                    Continuar
                  </button>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
