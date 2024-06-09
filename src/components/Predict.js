import React from "react";
import { Link } from "react-router-dom";

function Predict() {
  return (
    <div className="reviews-container">
      <h3 className="home-heading">CHAT PREDICTION</h3>
      <p className="home-passage">
        Our mission is to organise the world’s information and make it
        universally accessible and useful.Our mission is to organise the world’s
        information and make it universally accessible and useful.
      </p>
      <Link to={"/predict"}>
        <button className="navigate-btn">Upload File</button>
      </Link>
    </div>
  );
}

export default Predict;
