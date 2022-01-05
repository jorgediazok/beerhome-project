import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//IMAGE OF LOGIN CONTAINER
import Image from '../assets/images/beerhouse5.jpg';

//ICONS
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

//ACTIONS
import { signin, signup } from '../actions/auth';

//STYLES
import '../styles/Login.scss';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  return (
    <>
      <section className='login py-5'>
        <div className='container'>
          <div className='row  container__row g-0'>
            <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
              <img src={Image} alt='' className='img-fluid' />
            </div>
            <div className='col-lg-7 com-md-7 com-sm-12 col-12 text-center py-5'>
              <h1 className='animate__animated animate__zoomInDown animate__delay-0.7s'>
                Logueate y Pedí tus cervezas
              </h1>
              <form onSubmit={handleSubmit}>
                <div className='form-row pt-4'>
                  <div className='offset-1 col-lg-10'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange}
                      autoFocus
                      className='input-email my-3 px-3'
                    />
                  </div>
                </div>
                <div className='form-row pt-4'>
                  <div className='offset-1 col-lg-10'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange}
                      className='input-password px-3'
                    />
                  </div>
                </div>
                {isSignup && (
                  <>
                    <div className='form-row pt-4'>
                      <div className='offset-1 col-lg-10'>
                        <input
                          id='password'
                          name='confirmPassword'
                          type='password'
                          placeholder='Password'
                          // handleShowPassword={handleShowPassword}
                          onChange={handleChange}
                          className='input-password px-3'
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className='login__account__container'>
                  <span className='login__account' onClick={switchMode}>
                    {isSignup
                      ? '¿Ya tenés una cuenta? Logueate'
                      : '¿No tenés una cuenta? Registrate'}
                  </span>
                </div>
                <div className='form-row pt-4 pb-3'>
                  <div className='offset-1 col-lg-10'>
                    <button className='btn-login mt-3' type='submit'>
                      {isSignup ? 'Registrarse' : 'Ingresar'}
                    </button>
                  </div>
                </div>
              </form>
              <p>O Loggeate con</p>
              <span>
                <FaFacebook className='fa-facebook' />
              </span>
              <span>
                <FcGoogle className='fa-google' />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
