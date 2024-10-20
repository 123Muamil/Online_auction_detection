import React, { useState } from "react";
import "../styles/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    idCard: "",
    address:"",
    password: "",
    password2: "",
    username:""
  });
 const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response=await axios.post('https://online-auction-detection-backend.vercel.app/api/singup/buyer/',formData)
      // console.log("The response is:",)
      if(response.data.user.is_buyer===true)
        {
          navigate('/')
          setFormData({
            name: "",
            mobileNumber: "",
            email: "",
            idCard: "",
            address: "",
            password: "",
            password2: "",
            username: ""
          }); 
        }

    } catch (error) {
      console.log("The error while making request",error)
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            <div className="card shadow" style={{ width: 350 }}>
              <div className="card-body">
                <h3 className="card-title text-center">User Sign Up</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      placeholder="Enter your mobile number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      ID Card Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idCard"
                      placeholder="Enter your username"
                      name="idCard"
                      value={formData.idCard}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter your username"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    Confirm  Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password2"
                      placeholder="Enter your password"
                      name="password2"
                      value={formData.password2}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </form>
                <div className="text-center mt-3">
              <span>Already have an account? <Link to="/" style={{color:'blue'}}>Log in</Link></span>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
