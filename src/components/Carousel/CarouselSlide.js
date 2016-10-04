import React, { Component } from 'react';
import './CarouselSlide.css';

class CarouselSlide extends Component {

  visible() {
    return this.props.index === this.props.indexVisible
  }

  render() {

    let visibility = this.visible ? "" : "hidden"

    return (
      <div className={"carousel-item" + visibility}>
        index: { this.props.index }
        Visible? {this.visible}
        img: {this.props.img}
      </div>
    );
  }
}

export default CarouselSlide;
