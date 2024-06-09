import {useEffect, React} from "react";
import Footer from "../components/Footer";
import Locations from "../components/Locations";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="contactus-container">
      <div className="aboutus-parallax">
        <h1 className="page-heading">
          CONTACT <span style={{ color: "rgb(223, 126, 0)" }}>US</span>
        </h1>
        <p className="page-passage">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        </p>
        <i
          class="fa fa-angle-double-down"
          aria-hidden="true"
          style={{ color: "rgb(233, 140, 0)", fontSize: "40px" }}
        ></i>
      </div>
      
      <div className="direct-contact">
        <div className="heading-bold">CONTACT US DIRECTLY</div>
        <div className="contacts">
          <div className="contact-left"></div>
          <div className="contact-right">
            <div className="contact-directly">
              <div className="send-message">Call Or Send Mail</div>
              <div className="call-us">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <div className="ph-num" style={{ color: "rgba(0,0,0,0.7)" }}>
                  00000 00000 , 11111 11111
                </div>
              </div>
              <div>OR</div>
              <div className="email-us">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <div className="mail" style={{ color: "rgba(0,0,0,0.7)" }}>
                  abcdef@abc.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reachus">
        <div className="get-in-touch">
          <div className="heading-bold">GET IN TOUCH WITH US</div>
          <p>
            Send us your queries in the below section and get a reply in your
            e-mail. Every message will be replied within Two days
          </p>
        <div className="message-container">
          <div className="input-part1">
            <div className="input-container">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input type="text" name="name" placeholder="Your Name"></input>
            </div>
            <div className="input-container">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <input type="text" name="name" placeholder="Your E-mail"></input>
            </div>
          </div>
          <div className="input-part2">
            <textarea name="question" rows="5" cols="50" className="contactus-text-box" placeholder="Write your quaries here..."></textarea>
          </div>
        </div>
          <button className="navigate-btn">Submit</button>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
