import React, { Component } from 'react';
import ChecklistItem from './ChecklistItem';
import Slider from "react-slick";

const checklistMap = {
  'budget': 0,
  'apparel': 1,
  'reception': 2,
  'ceremony': 3
}

export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.updateSlider = this.updateSlider.bind(this);
  }

  updateSlider(id) {
    this.slider.slickGoTo(id);
  }

  render() {
    const checklistType = this.props.checklistType;
    const slideId = checklistMap[checklistType];

    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      initialSlide: slideId
    };

    if (this.slider) {
      this.updateSlider(slideId);
    }

    return (
      <div className="checklists">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
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
            <h2>Ceremony</h2>
            <ChecklistItem />
            <ChecklistItem />
            <ChecklistItem />
          </div>
        </Slider>
      </div>
    );
  }
}
