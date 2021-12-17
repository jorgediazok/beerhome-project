import React from 'react';
import Image from '../../assets/images/beer1.png';
import '../../styles/Hero.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-title__container'>
        <div className='hero-title'>BEER HOUSE</div>
        <div className='hero-subtitle'>
          Las mejores cerveza del mundo en tu casa
        </div>
        <button className='hero-button'>COMPRAR</button>
      </div>
      <img src={Image} alt='' className='hero-img' />
    </div>
  );
};

export default Hero;
