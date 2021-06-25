import React from "react";
import "../styles/Signup.scss";

const Signup = () => {
  return (
    <div className="login-form__container">
      <div className="login-form__title">Ingresa a tu cuenta</div>
      <form className="login-form">
        <input
          className="login-form__email"
          type="email"
          name="email"
          placeholder="Ingrese su email"
          autoFocus
        />
        <input
          className="login-form__password"
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
        />
        {/* <div className="login-form__show">
          Logo de Font <i class="fas fa-eye"></i> <i class="fas fa-eye-slash"></i>
        </div> */}
        <button className="login-form__submit" type="submit">
          Ingresar
        </button>
      </form>
      <div className="login-form__forgot">¿Olvidaste la contraseña?</div>
    </div>
  );
};

export default Signup;

//Hola, soy el cambio
