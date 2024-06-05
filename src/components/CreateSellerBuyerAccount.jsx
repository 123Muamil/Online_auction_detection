import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Styles for the page

const CreateSellerBuyerAccount = () => {
    return (
        <div className="Container">
            <div className="wrapper">
                <div className="button-wrapper mb-5">
                    <Link to="/sellerSignup" className="button seller">
                        Create Seller Account
                    </Link>
                </div>
                <div className="button-wrapper">
                    <Link to="/userSignup" className="button buyer">
                        Create Buyer Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateSellerBuyerAccount;
