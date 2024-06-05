import React from "react";
import "../../styles/styles.css";
const HeroSection = () => {
  return (
    <div className="hero-section d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="../../../auction.jpg"
              className="img-fluid"
              alt="Auction Image"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h1>Welcome to Online Buying Platform</h1>
              <p className="lead">
              Welcome to our cutting-edge online buying platform! Uncover the most exceptional deals with our advanced system, tailored to provide you with the best buying experience possible.
              </p>
              <button className="btn btn-primary hero-section-button">
                Start Buying
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
