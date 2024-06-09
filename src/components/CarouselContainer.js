import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import Navbar from "./Navbar";

function CarouselContainer() {
  return (
    <Carousel> 
        <Carousel.Item interval={1500}> 
          <div className="d-block w-100 slide-image1"/> 
          <Carousel.Caption> 
            <h3 className="Carousel-Title">
              <span className="colored">AGRI</span>
              CULTURE <span className="colored">ANALYSIS</span>
            </h3>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
        <div className="d-block w-100 slide-image2"/> 
          <Carousel.Caption> 
            <h3 className="Carousel-Title">
              <span className="colored">AGRI</span>
              CULTURE <span className="colored">ANALYSIS</span>
            </h3>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
        <div className="d-block w-100 slide-image3"/> 
          <Carousel.Caption> 
            <h3 className="Carousel-Title">
              <span className="colored">AGRI</span>
              CULTURE <span className="colored">ANALYSIS</span>
            </h3>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
        <div className="d-block w-100 slide-image4"/> 
          <Carousel.Caption> 
            <h3 className="Carousel-Title">
              <span className="colored">AGRI</span>
              CULTURE <span className="colored">ANALYSIS</span>
            </h3>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
  );
}

export default CarouselContainer;
