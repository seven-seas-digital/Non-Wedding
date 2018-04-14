import React from 'react';
import NavArrow from './NavArrow';

const Nav = (props) => {
  function handleClick(e) {
    e.preventDefault();
    const type = e.target.closest('a').dataset.type;
    props.updateChecklist(type);
    document.querySelector('.nav-container svg').style.left = 120;
  }

  return (
    <ul className="nav-container">
      <NavArrow />
      <li onClick={handleClick}><a href="" data-type="budget">budget</a></li>
      <li onClick={handleClick}><a href="" data-type="apparel">apparel</a></li>
      <li onClick={handleClick}><a href="" data-type="reception">reception</a></li>
      <li onClick={handleClick}><a href="" data-type="ceremony">ceremony</a></li>
    </ul>
  );
}

export default Nav;

