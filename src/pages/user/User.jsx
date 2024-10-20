import React,{useEffect,useState} from "react";
import UserNavbar from "./UserNavbar";
import UserHeroSection from '../user/UserHeroSection'
import axios from "axios";
const User = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    getUserData(storedToken); // Pass the stored token to the getUserData function
  }, []);
  
  const getUserData = async (storedToken) => { // Receive the stored token as an argument
    try {
      const response = await axios.get('https://online-auction-detection-backend.vercel.app/api/buyer/dashboard/', {
        headers: {
          'Authorization': `Token ${storedToken}`, // Use the stored token here
          'Content-Type': 'application/json'
        }
      });
      console.log("The response is:", response);
    } catch (error) {
      console.log("Error while getting Data", error);
    }
  };
  return (
    <div>
      <UserNavbar />
      <UserHeroSection />
    </div>
  );
};

export default User;
