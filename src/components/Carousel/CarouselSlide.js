import React, { Component } from 'react';

class CarouselSlide extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0
    };
  };

  InitIndex(index) {
    this.setState({ index: index});
  }

  render() {
    return (

      <div className="carousel-item">
        index: {this.state.index} {this.props.children}
      </div>
    );
  }
}

export default CarouselSlide;
