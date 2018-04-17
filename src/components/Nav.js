import React, {Component} from 'react';
import NavArrow from './NavArrow';

class Nav extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const activeNav = this.props.activeChecklist;
    this.activateNavItem(activeNav);
  }

  handleClick(e) {
    e.preventDefault();
    const type = e.target.closest('li').dataset.type;
    this.props.updateChecklist(type);
  }

  activateNavItem(navType) {
    
    const navItem = document.querySelector(`.nav-item[data-type='${navType}']`);
  
    if (navItem) {
      var navItems = document.querySelectorAll('.nav-item');
  
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].className = 'nav-item';
      }
  
      navItem.classList.add('active');
    }

  }

  render() {
    const navType = this.props.activeChecklist;
    this.activateNavItem(navType);
    
    return (
      <ul className="nav-container">
      <li className="nav-item" onClick={this.handleClick}  data-type="budget">budget</li>
      <li className="nav-item" onClick={this.handleClick} data-type="apparel">apparel</li>
      <li className="nav-item" onClick={this.handleClick} data-type="reception">reception</li>
      <li className="nav-item" onClick={this.handleClick} data-type="ceremony">ceremony</li>
    </ul>
    )
  }
}

export default Nav;