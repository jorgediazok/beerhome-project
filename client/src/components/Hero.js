import React from 'react';
import Image from '../assets/images/picture1.jpg';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={Image} alt="" className="hero-img" />
    </div>
  );
};

export default Hero;
