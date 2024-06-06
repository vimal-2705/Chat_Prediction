import React from "react";

function Packages() {
  return (
    <div className="packages-container">
      <h3 className="heading">PACKAGES</h3>
      <p>
        Transparency plays an important role in front end development. It lets
        you choose how transparent the elements on your web pages appear.
      </p>
      <div className="package">
        <div className="package-first">
          <div className="pack-name">
            <span className="colored-pack">1 Month</span> Pack
          </div>
          <div className="pack-details">
            The first process is registration which is need to be done to join
            our gym
          </div>
          <div className="pack-price">
            <i
              class="fa fa-inr"
              aria-hidden="true"
              style={{ fontSize: "15px" }}
            ></i>
            <span className="colored-rs">1000</span> only
          </div>
          {/*<button className="register-btn">Register</button>*/}
        </div>
        <div className="package-second">
          <div className="pack-name">
            <span className="colored-pack">6 Month</span> Pack
          </div>
          <div className="pack-details">
            The first process is registration which is need to be done to join
            our gym
          </div>
          <div className="pack-price">
            <i
              class="fa fa-inr"
              aria-hidden="true"
              style={{ fontSize: "15px" }}
            ></i>
            <span className="colored-rs">5000</span> only
          </div> 
          {/*<button className="register-btn">Register</button>*/}
        </div>
        <div className="package-third">
          <div className="pack-name">
            <span className="colored-pack">1 Year</span> Pack
          </div>
          <div className="pack-details">
            The first process is registration which is need to be done to join
            our gym
          </div>
          <div className="pack-price">
            <i
              class="fa fa-inr"
              aria-hidden="true"
              style={{ fontSize: "15px" }}
            ></i>
            <span className="colored-rs">9000</span> only
          </div>
          {/*<button className="register-btn">Register</button>*/}
        </div>
      </div>
    </div>
  );
}

export default Packages;
