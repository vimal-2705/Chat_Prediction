import {React, useEffect} from "react";
import Footer from "../components/Footer";

function Teachers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="trainerspage-container">
      <div className="aboutus-parallax">
        <h1 className="page-heading">
          <span style={{ color: "rgb(233, 140, 0)" }}>TEACHERS </span>
          WITH US
        </h1>
        <p className="page-passage">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged..
        </p>
        <i
          class="fa fa-angle-double-down"
          aria-hidden="true"
          style={{ color: "rgb(233, 140, 0)", fontSize: "40px" }}
        ></i>
      </div>
      <div className="trainee1">
        <div className="trainee1-left"></div>
        <div className="trainee1-right">
          <div className="trainee1-name">Builder</div>
          <div className="trainee1-details">
            <span
              style={{
                color: "rgb(255, 145, 0)",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Mr. South India
            </span>
            <br />
            <br />
            As a head fitness trainer with 11 years of experience in fitness,
            dieting and bodybuilding. I am a certified trainer in fitness,
            bodybuiding, nutritions and dietics. As a professional body builder,
            I have achieved titles of Mr. Coimbatore 2014 (Gold, Overall
            Champion), Inter district bodybuilding 2014(Gold, overall
            runner-up), Mr. Tamil Nadu — 2014 , Mr. South India – 2014. I
            strongly believe that "Fitness is not just a physical challenge but
            also a mental challenge. Just train yourself to be strong and to
            lead a healthy and jovial life".
          </div>
        </div>
      </div>
      <div className="other-trainee-container">
        <div className="other-trainee">
          <div className="other-trainee-top"></div>
          <div className="other-trainee-bottom">
            <div className="other-trainee-name">John Smith</div>
            <div className="other-trainee-details">
              I have achieved titles of Mr. Coimbatore 2014 (Gold, Overall
              Champion), Inter district bodybuilding 2014(Gold, overall
              runner-up), Mr. Tamil Nadu — 2014 , Mr. South India – 2014.
            </div>
          </div>
        </div>

        <div className="other-trainee">
          <div className="other-trainee-top"></div>
          <div className="other-trainee-bottom">
            <div className="other-trainee-name">John Smith</div>
            <div className="other-trainee-details">
              I have achieved titles of Mr. Coimbatore 2014 (Gold, Overall
              Champion), Inter district bodybuilding 2014(Gold, overall
              runner-up), Mr. Tamil Nadu — 2014 , Mr. South India – 2014.
            </div>
          </div>
        </div>

        <div className="other-trainee">
          <div className="other-trainee-top"></div>
          <div className="other-trainee-bottom">
            <div className="other-trainee-name">John Smith</div>
            <div className="other-trainee-details">
              I have achieved titles of Mr. Coimbatore 2014 (Gold, Overall
              Champion), Inter district bodybuilding 2014(Gold, overall
              runner-up), Mr. Tamil Nadu — 2014 , Mr. South India – 2014.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teachers;
