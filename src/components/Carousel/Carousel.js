import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Carousel.css';

class Carousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            direction: 'right'
        };
    };

    next() {
        let nextSlide = this.state.index + 1 < this.props.imgs.length ? this.state.index + 1 : 0;
        this.setState({ index: nextSlide, direction: 'right' });
    }

    prev() {
        var prevSlide = this.state.index - 1 < 0 ? this.props.imgs.length - 1 : this.state.index - 1;
        this.setState({ index: prevSlide, direction: 'left' });
    }

    goto(indexButton) {

    }

    render() {

        let indexCourant = this.state.index 
        
        let buttonsPagination = this.props.imgs.map(function (img, i) {
            let buttonActive = (indexCourant === i) ? 'active' : ''
            return (<button key={i} onClick={() => this.goto(i)} className={buttonActive}></button>)
        })

        return (
            <div className="carousel" >
                <ReactCSSTransitionGroup
                    transitionName={"translate-" + this.state.direction}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    component="div"
                    className="carousel-slider">
                    <img key={this.state.index} src={this.props.imgs[this.state.index]} role="presentation"/>
                </ReactCSSTransitionGroup>
                <button className="carousel-nav carousel-next" onClick={() => this.next()}></button>
                <button className="carousel-nav carousel-prev" onClick={() => this.prev()}></button>
                <div className="carousel-pagination">
                    {buttonsPagination}
                </div>
            </div >
        );
    }
}

export default Carousel;
