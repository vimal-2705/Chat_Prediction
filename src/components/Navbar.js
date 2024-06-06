import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-items">
        <Link to="/"  style={{ textDecoration: 'none' }}>
          <div className="nav-item item1">HOME</div>
        </Link>
        <Link to="/trainers" style={{ textDecoration: 'none' }}>
          <div className="nav-item item2">TRAINERS</div>
        </Link>
          <div className="nav-item item4"></div>
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <div className="nav-item item5">SERVICES</div>
        </Link>
        <Link to="/contactus" style={{ textDecoration: 'none' }}>
          <div className="nav-item item7">CONTACTUS</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
