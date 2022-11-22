import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderBox.css';

function SliderBox() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="SliderBox">
            <Slider {...settings} >
                <Slide image={slide1} />
                <Slide image={slide2} />
                <Slide image={slide3} />
            </Slider>
        </div>
    );
}

export default SliderBox;