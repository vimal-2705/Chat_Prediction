import React from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "./Navbar";

function CarouselContainer() {
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={3000}>
        <div className="d-block w-100 slide-image1"></div>
        <Carousel.Caption>
          <Navbar />
          <h3 className="Carousel-Title">
            <span className="colored">BODY</span>
            GYM <span className="colored">FIT</span>NESS 
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="d-block w-100 slide-image2"></div>
        <Carousel.Caption>
          <Navbar />
          <h3 className="Title">
            <span className="colored">BODY</span>
            TECH <span className="colored">FIT</span>NESS CLUB
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="d-block w-100 slide-image3"></div>
        <Carousel.Caption>
          <Navbar />
          <h3 className="Title">
            <span className="colored">BODY</span>
            TECH <span className="colored">FIT</span>NESS CLUB
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="d-block w-100 slide-image4"></div>
        <Carousel.Caption>
          <Navbar />
          <h3 className="Title">
            <span className="colored">BODY</span>
            TECH <span className="colored">FIT</span>NESS CLUB
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
