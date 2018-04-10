import React from 'react';

const Nav = (props) => {
  function handleClick(e) {
    e.preventDefault();
    const type = e.target.closest('a').dataset.type;
    props.updateChecklist(type);
  }

  return (
    <ul className="nav-container">
      <li onClick={handleClick}><a href="" data-type="budget">budget</a></li>
      <li onClick={handleClick}><a href="" data-type="apparel">apparel</a></li>
      <li onClick={handleClick}><a href="" data-type="reception">reception</a></li>
      <li onClick={handleClick}><a href="" data-type="ceremony">ceremony</a></li>      
    </ul>
  );
}

export default Nav;
  