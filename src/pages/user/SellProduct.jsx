import React, { useState, useEffect } from "react";
import '../../styles/styles.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SellProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [minBidAmount, setMinBidAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [sellerId, setSellerId] = useState('');
  const [token, setToken] = useState('');
  const navigate=useNavigate()
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    setToken(storedToken);
    setSellerId(id); 
  }, []);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleMinBidAmountChange = (e) => {
    setMinBidAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", description);
    formData.append("min_bid_amount", minBidAmount);
    formData.append("category", selectedCategory);
    formData.append("image", productImage);
    formData.append("seller", sellerId);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/products/', formData, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      if(response)
        {
            
            navigate('/view')
            setProductName('')
            setDescription('')
            setMinBidAmount('')
            setSelectedCategory('')
            setProductImage('')
          
        }
    } catch (error) {
      console.log("Error while getting Data", error);
    }
  };

  return (
    <div className="sell-product-container">
      <h2 className="sell-product-heading">Sell Products</h2>
      <form onSubmit={handleSubmit} className="sell-product-form" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="minBidAmount">Min Bid Amount:</label>
          <input
            type="number"
            id="minBidAmount"
            value={minBidAmount}
            onChange={handleMinBidAmountChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control-file"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellProduct;
