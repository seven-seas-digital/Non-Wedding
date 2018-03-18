import React from 'react';
import Logo from './Logo.js';
import UserInfo from './UserInfo';

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <UserInfo />
    </div>
  );

}

export default Header;