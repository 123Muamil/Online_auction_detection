import React from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
     navigate('/view')
    }
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
              <h1>Welcome to Online Selling Platform</h1>
              <p className="lead">
           Our High-Performance Selling Platform! Maximize your potential with our state-of-the-art system, designed to elevate your selling experience and unlock unparalleled opportunities.
              </p>
              <button className="btn btn-primary hero-section-button" onClick={handleNavigate}>
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
