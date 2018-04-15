import React from 'react';
import NavArrow from './NavArrow';

const Nav = (props) => {
  function handleClick(e) {
    e.preventDefault();
    const type = e.target.closest('a').dataset.type;
    props.updateChecklist(type);
    // document.querySelector('.nav-container svg').style.left = 120;
  }

  const activeChecklist = props.activeChecklist;

  // get the left position of the activeChecklist
    // look at the data type of all of the <li>'s
    // find the <li> with the data-type that matches activeChecklist
    // get the x property of that element
    // pass that x property down to <NavArrow />

  const navItem = document.querySelector(`li [data-type='${activeChecklist}']`);

  let style = {};
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

