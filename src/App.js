import React, { Component } from 'react';
import './App.css';
import Carousel from  './components/Carousel/Carousel.js';

class App extends Component {
  render() {

    let slides = [
      'http://lorempicsum.com/futurama/630/300/1',
      'http://lorempicsum.com/futurama/630/300/2',
      'http://lorempicsum.com/futurama/630/300/3']

    let slides2 = [
      'http://lorempicsum.com/futurama/630/300/4',
      'http://lorempicsum.com/futurama/630/300/5',
      'http://lorempicsum.com/futurama/630/300/6']

    return (
      <div>
        <Carousel imgs={slides} />
        <div className="ui grid">
          <div className="six wide column">
            <Carousel imgs={slides2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
