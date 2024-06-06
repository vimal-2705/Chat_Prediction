import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h3 className="home-heading">Agriculture</h3>
      <p className="home-passage">
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       <br/>and more recently with desktop publishing software like Aldus 
       PageMaker including versions of Lorem Ipsum.
      </p>
      <Link to="/aboutus"><button className="about-btn">About Us ?</button></Link>
    </div>
  );
}

export default About;
