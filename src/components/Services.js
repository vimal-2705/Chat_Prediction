import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="service-container">
      <h3 className="heading">SERVICES</h3>
      <p>
        Find Top Rated Gyms. Search Faster, Better & Smarter at ZapMeta Now!
        Information 24/7 · The Complete Overview · 100+ Million Visitors Types:
        pdf, doc, ppt, xls, txt
      </p>
      <div className="service1">
        <img
          alt="image"
          className="service1-img"
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <div className="service1-info">
          <div className="service1-name">Cardiology</div>
          <div className="service1-text">
            Find Top Rated Gyms. Search Faster, Better & Smarter at ZapMeta Now!
            Information 24/7 · The Complete Overview · 100+ Million Visitors
            Types: pdf, doc, ppt, xls, txt
          </div>
        </div>
      </div>

      <div className="service2">
        <div className="service2-info">
          <div className="service2-name">Cardiology</div>
          <div className="service2-text">
            Find Top Rated Gyms. Search Faster, Better & Smarter at ZapMeta Now!
            Information 24/7 · The Complete Overview · 100+ Million Visitors
            Types: pdf, doc, ppt, xls, txt
          </div>
        </div>
        <img
          alt="image"
          className="service2-img"
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
      <Link to="/services">
      <button className="navigate-btn">All Services</button>
      </Link>
    </div>
  );
}

export default Services;
