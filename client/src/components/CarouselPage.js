import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg'

const CarouselPage = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2}
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselPage