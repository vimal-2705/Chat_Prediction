import {React, useEffect} from "react";
import Footer from "../components/Footer";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="services-page-container">
      <div className="aboutus-parallax">
        <h1 className="page-heading">
          <span style={{ color: "rgb(223, 126, 0)" }}>SERVICES</span> WE PROVIDE
        </h1>
        <p>
          The body tech was first established on 25th May 2018 in SIDCO
          industrial Estate which is now a top player among fitness centres in
          Coimbatore.The body tech was first established on 25th May 2018 in
          SIDCO industrial Estate which is now a top player among fitness
          centres in Coimbatore.
        </p>
        <i
          class="fa fa-angle-double-down"
          aria-hidden="true"
          style={{ color: "rgb(233, 140, 0)", fontSize: "40px" }}
        ></i>
      </div>
      <h3 className="heading" style={{ paddingTop: "50px" }}>
        SERVICES
      </h3>
      <div className="service-page-container">
        <div className="service">
          <div className="service-left left1"></div>
          <div className="service-right">
            <div className="service-name">CARDIO</div>
            <div className="service-details">
              The body tech was first established on 25th May 2018 in SIDCO
              industrial Estate which is now a top player among fitness centres
              in Coimbatore.
            </div>
          </div>
        </div>

        <div className="service">
          <div className="service-left left2"></div>
          <div className="service-right">
            <div className="service-name">WEIGHT LOSS</div>
            <div className="service-details">
              The body tech was first established on 25th May 2018 in SIDCO
              industrial Estate which is now a top player among fitness centres
              in Coimbatore.
            </div>
          </div>
        </div>

        <div className="service">
          <div className="service-left left3"></div>
          <div className="service-right">
            <div className="service-name">WEIGHT GAIN</div>
            <div className="service-details">
              The body tech was first established on 25th May 2018 in SIDCO
              industrial Estate which is now a top player among fitness centres
              in Coimbatore.
            </div>
          </div>
        </div>

        <div className="service">
          <div className="service-left left4"></div>
          <div className="service-right">
            <div className="service-name">BODY BUILDING</div>
            <div className="service-details">
              The body tech was first established on 25th May 2018 in SIDCO
              industrial Estate which is now a top player among fitness centres
              in Coimbatore.
            </div>
          </div>
        </div>

        <div className="service">
          <div className="service-left left5"></div>
          <div className="service-right">
            <div className="service-name">NUTRITION GUIDANCE</div>
            <div className="service-details">
              The body tech was first established on 25th May 2018 in SIDCO
              industrial Estate which is now a top player among fitness centres
              in Coimbatore.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
