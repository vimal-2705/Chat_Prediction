import React from "react";
import { Link } from "react-router-dom";

function Trainers() {
  return (
    <div className="trainers-container">
      <h3 className="home-heading">TEACHERS</h3>
      <p className="home-passage">
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
      desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div className="trainer-container">
        <div className="trainer trainer1">
          <img
            className="trainer1-img"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="trainer-info">
            <div className="trainer-name">James Bond</div>
            <div className="trainer-about">
              Transparency plays an important role in front end development. It
              lets you choose how transparent the elements on your web pages
              appear.
            </div>
          </div>
        </div>

        <div className="trainer trainer2">
          <img
            className="trainer2-img"
            src="https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="trainer-info">
            <div className="trainer-name">James Bond</div>
            <div className="trainer-about">
              Transparency plays an important role in front end development. It
              lets you choose how transparent the elements on your web pages
              appear.
            </div>
          </div>
          <Link to="/teachers"><button className="trainer-btn">All Trainers</button></Link>
        </div>

        <div className="trainer trainer3">
          <img
            className="trainer3-img"
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="trainer-info">
            <div className="trainer-name">James Bond</div>
            <div className="trainer-about">
              Transparency plays an important role in front end development. It
              lets you choose how transparent the elements on your web pages
              appear.
            </div>
          </div>
        </div>
      </div>
      <center>
      <Link to="/trainers"><button className="navigate-btn last">All Trainers</button></Link>
      </center>
    </div>
  );
}

export default Trainers;
