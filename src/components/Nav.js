import React from 'react';
import NavArrow from './NavArrow';

const Nav = (props) => {
  function handleClick(e) {
    e.preventDefault();
    const type = e.target.closest('a').dataset.type;
    props.updateChecklist(type);
  }

  const activeChecklist = props.activeChecklist;
  const activeNav = props.activeNav;

  let realAcitveNav = activeChecklist;

  if (activeChecklist !== activeNav) {
    realAcitveNav = activeNav;
  }

  const navItem = document.querySelector(`li [data-type='${realAcitveNav}']`);

  let xPosition;

  if (navItem) {
    const left = navItem.offsetLeft;
    xPosition = `${left}px`;
  }

  return (
    <ul className="nav-container">
      <NavArrow
        xPosition={xPosition}/>
      <li onClick={handleClick}><a href="" data-type="budget">budget</a></li>
      <li onClick={handleClick}><a href="" data-type="apparel">apparel</a></li>
      <li onClick={handleClick}><a href="" data-type="reception">reception</a></li>
      <li onClick={handleClick}><a href="" data-type="ceremony">ceremony</a></li>
    </ul>
  );
}

export default Nav;

