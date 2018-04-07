import React from 'react';
import logo from '../assets/logo-nonwedding.svg';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <div className="logo-container">
      <img src={logo} alt="nonwedding-logo" className="logo"/>
      <h2 style={{position: 'absolute', right: '20px', top: '0'}}><Link to="/SignIn">Sign in</Link></h2>
    </div>
  );
}

export default Logo;