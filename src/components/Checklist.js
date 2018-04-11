import React from 'react';
import ChecklistItem from './ChecklistItem';
import Slider from "react-slick";

const Checklist = (props) => {

  const checklistType = props.checklistType;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  };

  return (
      <Slider {...settings}>
    <div className="checklist-container">
        <h2>Budget</h2>
          <ChecklistItem />
          <ChecklistItem />
          <ChecklistItem />
    </div>
    
    <div className="checklist-container">
        <h2>Apparel</h2>
          <ChecklistItem />
          <ChecklistItem />
          <ChecklistItem />
    </div>

    <div className="checklist-container">
        <h2>Reception</h2>
          <ChecklistItem />
          <ChecklistItem />
          <ChecklistItem />
    </div>
    <div className="checklist-container">
        <h2>Da Party</h2>
          <ChecklistItem />
          <ChecklistItem />
          <ChecklistItem />
    </div>
      </Slider>
  );
}

export default Checklist;