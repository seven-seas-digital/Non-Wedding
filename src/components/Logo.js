import React from 'react';
import logo from '../assets/rings-nonwedding.svg';

const Logo = (props) => {
  return (
    <div className="logo-container">
      <img src={logo} alt="nonwedding-logo" className="logo"/>
    </div>
  );
}

export default Logo;