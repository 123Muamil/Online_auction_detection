import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserNavbar = () => {
  const navigate=useNavigate()
  const Logout=()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('is_buyer')
      navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Buyer Panel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
              Products
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/delete_products">
                Delete Products
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                View User Status
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/block_user">
                Block User
              </NavLink>
            </li> */}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={Logout}>
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
