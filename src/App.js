import React, { Component } from 'react';
import './App.css';
import Carousel from  './components/Carousel/Carousel.js';
import CarouselSlide from './components/Carousel/CarouselSlide.js';

class App extends Component {
  render() {
    return (

      <Carousel>
        <CarouselSlide>
          <h2>Salut les gens 1</h2>
        </CarouselSlide>
        <CarouselSlide>
          <h2>Salut les gens 2</h2>
        </CarouselSlide>
      </Carousel>
    );
  }
}

export default App;
