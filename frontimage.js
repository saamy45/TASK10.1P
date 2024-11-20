import React from "react";
import './App.css';
import Logo from './images/Logo.jpg';

function Hero() {
  return (
    <div className="hero">
      <images src={Logo} alt="DEV@Deakin Logo" className="hero-logo" />
    </div>
  );
}

export default Hero;
