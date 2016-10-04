import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            slides: this.props.children
        };
    };

    componentDidMount() {
        // this.state.slides.forEach((slide, i) => {
        //     console.log(slide.props.children)
        //     console.log(slide)
        // })
    };

    render() {
        return (
            <div className="carousel carousel-slider center">
                {this.state.slides}
            </div>
        );
    }
}

export default Carousel;
