import React, { Component } from 'react';
import CarouselSlide from './CarouselSlide.js';
import './Carousel.css';

class Carousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            slides: this.props.imgs
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    };

    next() {
        let i = this.state.index + 1
        if (i >= this.state.slides.length) {
           i = 0
        }
        this.setState({ index: i });
    }

    prev() {
        let i = this.state.index - 1
        if (i < 0) {
            i = this.state.slides.length - 1
        }
        this.setState({ index: i });
    }

    render() {
        let indexCourant = this.state.index;

        let slides = this.state.slides.map(function (img, i) {
            return (<CarouselSlide key={i} index={i} indexVisible={indexCourant} img={img} />)
        })

        return (
            <div className="carousel">
                <div className="carousel-slider">
                    {slides}
                </div>
                <button className="carousel-nav carousel-next" onClick={this.next}></button>
                <button className="carousel-nav carousel-prev" onClick={this.prev}></button>
            </div>
        );
    }
}

export default Carousel;
