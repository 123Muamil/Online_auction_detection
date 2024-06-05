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
              <h1>Welcome to Online Auction Detection</h1>
              <p className="lead">
                Find the best deals with our advanced auction detection system
              </p>
              <button className="btn btn-primary hero-section-button">
                Start Bidding
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
