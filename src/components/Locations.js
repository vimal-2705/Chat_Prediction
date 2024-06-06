import React from "react";

function Locations() {
  return (
    <div className="locations-container">
      <h3 className="heading">Do Visit Our Fitness Clubs</h3>
      <p>
        We have two fintness center in Coimbatore. Please do visit our fitness
        clubs and clarify your doubts Or Please contact us through mobile or
        email{" "}
      </p>
      <div className="location">
        <div className="loc location1">
          <div className="location-topic">Address 1</div>
          <div className="location-address">
            169/1 D, E-Second Floor, Chettiyar Thottam, Madukkarai Main Rd,
            SIDCO Private Industrial Estate, post, Coimbatore - 641021
          </div>
          <a href="https://maps.app.goo.gl/Nx4h7toz6bNvTQAGA"><button className="location-btn">View Map</button></a>
        </div>
        <div className="loc location2">
          <div className="location-topic">Address 2</div>
          <div className="location-address">
            A1 GKT Tower, Kovaipudur, Coimbatore - 641042, VLB Arts College Near
          </div>
          <button className="location-btn">View Map</button>
        </div>
      </div>
    </div>
  );
}

export default Locations;
