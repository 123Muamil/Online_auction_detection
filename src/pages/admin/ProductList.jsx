
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        const token=localStorage.getItem('token')
      try {
        const response = await axios.get('http://localhost:8000/api/by-seller/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        console.log("The admin products are:",response)
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
   <div>
    <AdminNavbar/>
    <div className='container'>
    <div className="products-container">
    <h2 className="heading mt-5 mb-5 text-center " style={{color:'aqua'}}>Products by Seller</h2>
    <div className='row'>
    {Object.entries(products).map(([seller, products]) => (
      <div className='product-cards' key={seller}>
        <h3 className="seller-name" style={{color:'#AF352D'}}>{seller}</h3>
        <ul className="row">
          {products.map(product => (
            <div className='col-md-4' key={product.id}>
                <li className="product" >
              <img src={`http://localhost:8000/api${product.image}`} alt={product.name} className="product-image" />
              <div className="product-details">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.min_bid_amount}</p>
                <p className="product-category">Category: {product.category}</p>
              </div>
            </li>
            </div>
          ))}
        </ul>
      </div>
    ))}
    </div>
  </div>
    </div>
   </div>
  
  );
}

export default ProductList;

