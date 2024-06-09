import React from "react";
import CarouselContainer from "../components/CarouselContainer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Teachers from "../components/Teachers";
import Packages from "../components/Packages";
import Shop from "../components/Shop";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Locations from "../components/Locations";
import Predict from "../components/Predict";

function Home() {
  return (
    <div>
      {/*
      <Services /> 
      <Packages /> 
      <Shop />
      <Locations />
      <Reviews /> */}
      <CarouselContainer />
      <Predict />
      <About />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
