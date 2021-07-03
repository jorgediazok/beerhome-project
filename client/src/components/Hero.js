import React from "react";
import Image from "../assets/images/picture1.jpeg";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-title__container">
        <div className="hero-title">BEER HOUSE</div>
        <div className="hero-subtitle">
          La mejor cerveza del mundo en tu casa
        </div>
      </div>
      <img src={Image} alt="" className="hero-img" />
    </div>
  );
};

export default Hero;
