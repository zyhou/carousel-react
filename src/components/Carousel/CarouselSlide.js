import React, { Component } from 'react';

class CarouselSlide extends Component {

  render() {
    return (

      <div className="carousel-item">
        index: {this.props.index} {this.props.img}
      </div>
    );
  }
}

export default CarouselSlide;
