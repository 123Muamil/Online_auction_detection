import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
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
      const response=await axios.post('http://127.0.0.1:8000/api/login/',formData)
      console.log("The response is:",response)
      localStorage.setItem("token",response.data.token)
       if(response.data.is_superuser===true)
        {
             localStorage.setItem('is_superuser',response.data.is_superuser)
             navigate('/admin')
             setFormData({
              username: "",
              password: "",
            });  
        }
       if(response.data.is_buyer===true)
        {
          localStorage.setItem('is_buyer',response.data.is_buyer)
          navigate('/user')
          setFormData({
            username: "",
            password: "",
          }); 
        }
      if(response.data.is_seller===true)
        {
          localStorage.setItem('is_seller',response.data.is_seller)
          localStorage.setItem('username',response.data.username)
          navigate('/seller')
          setFormData({
            username: "",
            password: "",
          });  
        }
  
    } catch (error) {
      console.log("Error while login",error)
    }
    console.log(formData);
    // Add login logic here
  };
  const handleLogin = () => {
    navigate("/user");
  };
  return (
    <div className="auth-container">
  <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="card shadow" style={{ width: 350 }}>
          <div className="card-body">
            <h3 className="card-title text-center">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your email"
                  name="username"
                  value={formData.username}
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

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-3">
              <span>Don't have an account? <Link to="/account" style={{color:'blue'}}>Sign up</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
