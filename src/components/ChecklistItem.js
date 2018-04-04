import React from 'react';

const ChecklistItem = (props) => {
  return (
    <div className="checklist-item">
      <div className="content-container">
        <p className="item-name">Income</p>
        <p className="total-spent">$10,000</p>
        <p className="item-subtitle">10 transactions</p>
        <p className="budget">of $12,000</p>
      </div>
      <div className="more-button"></div>
    </div>
  );
}

export default ChecklistItem;