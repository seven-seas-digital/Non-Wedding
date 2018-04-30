import React, { Component } from 'react';

class ChecklistItem extends Component {
    handleClick() {
    // we want to update the state to open modal 
  }
  render () {
    return (
      <div className="checklist-item">
        <div className="content-container">
          <p className="item-name">Income</p>
          <p className="total-spent">$10,000</p>
          <p className="item-subtitle">10 transactions</p>
          <p className="budget">of $12,000</p>
        </div>
        <div className="more-button" onClick={ this.handleClick }></div>
      </div>
    );
  }
}

export default ChecklistItem;