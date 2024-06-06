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
      <h5 className="direct">Contact us directly</h5>
      <div className="contact-directly">
        <div className="call-us">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <div className="ph-num">00000 00000, 11111 11111</div>
        </div>
        <div>OR</div>
        <div className="email-us">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <div className="mail">abcdef@abc.com</div>
        </div>
      </div>
      <Link to="/contactus">
      <button className="contact-btn">Send Message</button>
      </Link>
    </div>
  );
}

export default Contact;
