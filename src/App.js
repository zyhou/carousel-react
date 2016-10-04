import React, { Component } from 'react';
import './App.css';
import Carousel from  './components/Carousel/Carousel.js';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      slides: [
        'http://lorempicsum.com/futurama/630/300/1',
        'http://lorempicsum.com/futurama/630/300/2',
        'http://lorempicsum.com/futurama/630/300/3'],
      slides2: [
        'http://lorempicsum.com/futurama/630/300/4',
        'http://lorempicsum.com/futurama/630/300/5',
        'http://lorempicsum.com/futurama/630/300/6']
    };

  };

  addSlide() {
    this.state.slides.push('http://lorempicsum.com/futurama/630/300/' + (parseInt(this.state.slides.length, 10) + 1))
    this.setState({ slides: this.state.slides });
  }

  removeSlide() {
    if (this.state.slides.length === 2) return;

    this.state.slides.splice(this.state.slides.length - 1, 1)
    this.setState({ slides: this.state.slides });
  }

  render() {

    return (
      <div>
        <Carousel imgs={this.state.slides} />
        <div className="ui basic segment center aligned">
          <div className="ui buttons">
            <button className="ui button green" onClick={() => this.addSlide() }>Ajouter un slide</button>
            <div className="or"></div>
            <button className="ui button red" onClick={() => this.removeSlide() }>Supprimer un slide</button>
          </div>
        </div>
        <div className="ui grid">
          <div className="six wide column">
            <Carousel imgs={this.state.slides2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
