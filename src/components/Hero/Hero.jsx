import React from "react";
import "./Hero.css";
import pic from "../../../public/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <div>
      <section className="flexCenter hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">
          {/* *LEFT side*/}
          <div className="flexColStart hero-left">
            <div className="flexCenter hero-title">
              <div className="orange-circle" />
              <h1>
                Online Auction
                <br />
                Using Shill Bidding
                <br /> Prevention
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span>Authentic Bidding: Fight Shill Tactics with Us</span>
              <span>Spotlight on Shill Bidders: Expose Auction Fraud</span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker style={{ color: "blue" }} width={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
          </div>
          {/* /** Right side **/}
          <div className="hero-right flexCenter">
            <div className="image-container">
              <img src={pic} alt="Hero ki img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
