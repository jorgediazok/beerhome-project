import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//IMAGE OF LOGIN CONTAINER
import Image from '../assets/images/beerhouse5.jpg';

//FOR API CALL
import axios from 'axios';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//ICONS
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

//STYLES
import '../styles/Login.scss';

//TOAST CONFIGURATION
toast.configure();

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  //TOAST FUNCTION
  const notify = () => {
    toast('Login Succesful', { position: toast.POSITION.TOP_LEFT });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // dispatch(signup(form, history));
    } else {
      // dispatch(signin(form, history));
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
                  {!error && success ? success : ''}
                  {!success && error ? error : ''}
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
                <div className='form-row pt-3'>
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
                <div className='form-row pt-4 pb-3'>
                  <div className='offset-1 col-lg-10'>
                    <button className='btn-login mt-3' type='submit'>
                      INGRESAR
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
