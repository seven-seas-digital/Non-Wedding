import React, { Component } from 'react';
import ChecklistItem from './ChecklistItem';
import Slider from "react-slick";

const checklistMap = {
  'budget': 1,
  'apparel': 2,
  'reception': 3,
  'ceremony': 4
}

export default class Checklist extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const checklistType = prevProps.checklistType;
  //   const slideId = checklistMap[checklistType];
  //   this.slider.slickGoTo(slideId);
  // }



  render() {
    const checklistType = this.props.checklistType;
    const slideId = checklistMap[checklistType];

    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      slickGoTo: slideId,
      // ref: (ref) => this.slider = ref,
      // afterChange: () => alert('hey'),
      initialSlide: slideId
    };
    // this.sliderWrapper.slider.slickGoTo(slideId)
    // this.slider.slickGoTo(slideId);

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
}
