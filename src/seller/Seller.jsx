import React,{useEffect, useState} from 'react'
import SellerNavbar from './SellerNavbar'
import SellerHeroSection from './SellerHeroSection'
import axios from 'axios'
const Seller = () => {
    const [token, setToken] = useState('');
    useEffect(() => {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      getUserData(storedToken); // Pass the stored token to the getUserData function
    }, []);
    
    const getUserData = async (storedToken) => { // Receive the stored token as an argument
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/seller/dashboard/', {
          headers: {
            'Authorization': `Token ${storedToken}`, // Use the stored token here
            'Content-Type': 'application/json'
          }
        });
        console.log("The response is:", response);
        localStorage.setItem("id", response.data.username)
      } catch (error) {
        console.log("Error while getting Data", error);
      }
    };
    
  return (
    <div>
        <SellerNavbar/>
        <SellerHeroSection/>
    </div>
  )
}

export default Seller