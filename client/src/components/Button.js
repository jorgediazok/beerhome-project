import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.scss';
//comment
const Button = () => {
  return (
    <Link to="/signup">
      <button className="btn">Login</button>
    </Link>
  );
};

export default Button;
