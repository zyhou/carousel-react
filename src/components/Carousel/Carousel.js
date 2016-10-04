import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Carousel.css';

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
        let nextSlide = this.state.index + 1 < this.props.imgs.length ? this.state.index + 1 : 0;
        this.setState({ index: nextSlide });
    }

    prev() {
        var prevSlide = this.state.index - 1 < 0 ? this.props.imgs.length - 1 : this.state.index - 1;
        this.setState({ index: prevSlide });
    }

    render() {

        return (
            <div className="carousel">
                <ReactCSSTransitionGroup
                    transitionName="translate"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    component="div"
                    className="carousel-slider"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}>
                    <img key={this.state.index} src={this.props.imgs[this.state.index]} role="presentation"/>
                </ReactCSSTransitionGroup>
                <button className="carousel-nav carousel-next" onClick={this.next}></button>
                <button className="carousel-nav carousel-prev" onClick={this.prev}></button>
            </div>
        );
    }
}

export default Carousel;
