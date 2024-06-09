import {React, useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="aboutus-container">
      <div className="aboutus-parallax">  
        <h1 className="page-heading">
          ABOUT <span style={{ color: "rgb(223, 126, 0)" }}>US</span>
        </h1>
        <p className="page-passage">
        It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <i
          class="fa fa-angle-double-down"
          aria-hidden="true"
          style={{ color: "rgb(233, 140, 0)", fontSize: "40px" }}
        ></i>
      </div>
      <div className="aboutus1">
        <div className="about-left1"></div>
        <div className="about-right1">
          <div className="heading-bold">ABOUT US</div>
          <div className="aboutus-text">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>

      <div className="aboutus2">
        <div className="about-left2">
          <div className="heading-bold">WITH US</div>
          <div className="aboutus-text">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="about-right2"></div>
      </div>

      <div className="aboutus3">
        <div className="about-left3"></div>
        <div className="about-right3">
          <div className="heading-bold">WITH US!</div>
          <div className="aboutus-text">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..
            <br />
            <br />
            It was popularised in the 1960s passages, and more recently with desktos of Lorem Ipsum.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
