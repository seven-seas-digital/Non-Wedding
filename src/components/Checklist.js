import React from 'react';
import ChecklistItem from './ChecklistItem';

const Checklist = (props) => {
  return (
    <div className="check-list-item">
      <h2> Checklist </h2>
        <ChecklistItem />
    </div>
  );
}

export default Checklist;