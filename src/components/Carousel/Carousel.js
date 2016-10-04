import React, { Component } from 'react';
import CarouselSlide from './CarouselSlide.js';

class Carousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    };

    next() {
        this.setState({index: this.state.index++});
    }

    prev() {
        this.setState({index: this.state.index--});
    }

    render() {
        let index = this.state.index;
        let slides = this.props.imgs.map(function (img, i) {
            return (<CarouselSlide key={i} index={i} indexVisible={index} img={img} />)
        })

        return (
            <div className="carousel">
                <div className="carousel carousel-slider center">
                    {slides}
                </div>
                <button className="carousel-next" onClick={this.next}>Suivant</button>
                <button className="carousel-prev" onClick={this.prev}>Précédent</button>
            </div>
        );
    }
}

export default Carousel;
