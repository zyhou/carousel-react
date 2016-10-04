import React, { Component } from 'react';
import './App.css';
import Carousel from  './components/Carousel/Carousel.js';
import CarouselSlide from './components/Carousel/CarouselSlide.js';

class App extends Component {
  render() {
    return (

      <Carousel>
        <CarouselSlide index={0} img="Salut les gens 1" />
        <CarouselSlide index={1} img="Salut les gens 2" />
      </Carousel>
    );
  }
}

export default App;
