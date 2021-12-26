import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//TOAST CONFIGURATION
toast.configure();

//TOAST FUNCTION
const notify = () => {
  toast('Te logueaste correctamente', { position: toast.POSITION.TOP_LEFT });
};

const notifyError = () => {
  toast('Error. Credenciales Inválidas', {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    //Signin the user
    const { data } = await api.signIn(formData);
    dispatch({
      type: AUTH,
      data,
    });
    history.push('/tienda');
    notify();
  } catch (error) {
    console.log(error.message);
    notifyError();
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //Signup the user
    const { data } = await api.signUp(formData);
    dispatch({
      type: AUTH,
      data,
    });
    history.push('/tienda');
    notify();
  } catch (error) {
    console.log(error.message);
    notifyError();
  }
};
