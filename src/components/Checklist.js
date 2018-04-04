import React from 'react';
import ChecklistItem from './ChecklistItem';

const Checklist = (props) => {

  const checklistType = props.checklistType;

  return (
    <div className="checklist-container">
      <h2>{checklistType}</h2>
        <ChecklistItem />
        <ChecklistItem />
        <ChecklistItem />
    </div>
  );
}

export default Checklist;