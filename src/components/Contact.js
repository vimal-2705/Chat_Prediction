import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-container">
      <h3 className="home-heading">CONTACTUS</h3>
      <p className="home-passage">
        Search by image now supports video! Upload an image or video and find
        visually similar files.Search by image now supports video! Upload an
        image or video and find visually similar files.
      </p>
      
      <Link to="/contactus">
      <button className="contact-btn">Contact Us</button>
      </Link>
    </div>
  );
}

export default Contact;
