import React, { Component } from 'react';
import './App.css';
import Carousel from  './components/Carousel/Carousel.js';

class App extends Component {
  render() {
    return (
      <Carousel imgs={["http://placehold.it/1000x400/ffffff/c0392b/&text=slide1", "http://placehold.it/1000x400/ffffff/c0392b/&text=slide2", "http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"]} />
    );
  }
}

export default App;
