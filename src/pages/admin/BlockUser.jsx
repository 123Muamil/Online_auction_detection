import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/duplicates.css'
const DetectMultipleSellerAccounts = () => {
    const [multipleAccounts, setMultipleAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleCheck = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://online-auction-detection-backend.vercel.app/api/check-duplicates/');
            console.log("Multiple User Response is:",response)
            setMultipleAccounts(response.data.duplicates);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
            alert("Error occurred while checking accounts");
        }
    };
    return (
        <div>
            
            {multipleAccounts.length === 0?<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'300px'}}><button style={{borderRadius:"20px"}}  onClick={handleCheck} disabled={loading}>
                {loading ? 'Checking...' : 'Check Multiple Seller Accounts'}
            </button></div> : (
                <div className='container'>
                    <h3 className='text-center mt-5 mb-5' style={{color:'#333'}}>Sellers with Multiple Accounts</h3>
                    <ul className='row'>
                        {multipleAccounts.map((item, index) => (
                            <li className='col-md-4 mb-5'  key={index}> <div className="Card">
                            <div className="Card-header">
                                <h2 className="name">{item.name}</h2>
                            </div>
                            <div className="Card-body">
                                <p><strong>Address:</strong> {item.address}</p>
                                <p><strong>Date of Birth:</strong> {item.date_of_birth}</p>
                                <p><strong>Email:</strong> {item.email}</p>
                                <p><strong>ID Card:</strong>{item.id_card}</p>
                                <p><strong>Phone Number:</strong> {item.phone_number}</p>
                            </div>
                            <div class="Card-footer">
            <button class="remove-button" style={{borderRadius:"20px"}}>Remove Account</button>
        </div>
                        </div></li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DetectMultipleSellerAccounts;
