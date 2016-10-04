import React, { Component } from 'react';
import './App.css';
import Carousel from  './components/Carousel/Carousel.js';

class App extends Component {
  render() {
    return (
      <Carousel imgs={["Salut les gens 1", "Salut les gens 2"]} />
    );
  }
}

export default App;
