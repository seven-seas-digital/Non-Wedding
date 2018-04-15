import React from 'react';
import Logo from './Logo.js';
import UserInfo from './UserInfo';
import Nav from './Nav';

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <UserInfo />
      <Nav
        activeNav={props.activeNav}
        activeChecklist={props.activeChecklist}
        updateChecklist={props.updateChecklist}/>
    </div>
  );

}

export default Header;