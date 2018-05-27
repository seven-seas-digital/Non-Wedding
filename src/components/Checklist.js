import React, { Component } from 'react';
import ChecklistItem from './ChecklistItem';
import Slider from "react-slick";
import BudgetDetail from './BudgetDetail';

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
    this.getKeyByValue = this.getKeyByValue.bind(this);
    this.updateNav = this.updateNav.bind(this);
  }

  updateSlider(id) {
    this.slider.slickGoTo(id);
  }

  updateNav(type) {
    this.props.updateChecklist(type)
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  render() {
    const checklistType = this.props.checklistType;
    const slideId = checklistMap[checklistType];

    var settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      draggable: true,
      initialSlide: slideId,
      afterChange: (function(index) {
        const map = this.props.checklistMap;
        const nextChecklist = Object.keys(map).find(key => map[key] === index);
     
        this.updateNav(nextChecklist);
      }).bind(this)
    };

    if (this.slider) {
      this.updateSlider(slideId);
    }

    return (
      <div className="dashboard">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="checklist-container">
            <h2 className="checklist-title">Budget</h2>
            <BudgetDetail />
          </div>

          <div className="checklist-container">
          <h2 className="checklist-title">Apparel</h2>
            <ChecklistItem />
            <ChecklistItem />
            <ChecklistItem />
          </div>

          <div className="checklist-container">
          <h2 className="checklist-title">Reception</h2>
            <ChecklistItem />
            <ChecklistItem />
            <ChecklistItem />
          </div>
          <div className="checklist-container">
          <h2 className="checklist-title">Ceremony</h2>
            <ChecklistItem />
            <ChecklistItem />
            <ChecklistItem />
          </div>
        </Slider>
      </div>
    );
  }
}
