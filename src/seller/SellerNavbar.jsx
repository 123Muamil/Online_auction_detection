import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SellerNavbar = () => {
  const navigate=useNavigate()
  const Logout=()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('is_seller')
     localStorage.removeItem('username')
      navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        Seller Panel
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
            <NavLink className="nav-link" to="/add_product">
           Add Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/view">
             Products
            </NavLink>
          </li>
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
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={Logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default SellerNavbar