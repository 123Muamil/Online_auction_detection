import React from "react";
import './Header.css';
const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className="h-container flexCenter paddings innerWidth">
          {/* <img src="./logo.png" alt="logo" width={100}></img> */}
          <div className="h-menu flexCenter">
            <a href=""></a>
            <a href=""> View Products</a>
            <a href="">Delete Products </a>
            <a href="">Winner Details</a>
            <a href="">View User Status</a>
            <a href="">Block User</a>
            <a href="">View Feedback</a>
            <a href="">Block User</a>
            <button className="button">
            <a href="">Logout</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
