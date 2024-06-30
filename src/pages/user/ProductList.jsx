import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../../styles/styles.css'
import UserNavbar from './UserNavbar';
const ProductList = () => {
  const [products,setAllProducts]=useState([])
  console.log("The product is:",products)
  useEffect(() => {
    getAllProducts()
  }, [])
  const getAllProducts=async()=>{
     try {
       const response= await axios.get('http://localhost:8000/api/all-products/')
      //  console.log("The response is:",response)
       setAllProducts(response.data)
     } catch (error) {
      
     }
  }
  return (
   <div>
    <UserNavbar/>
     <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center mb-3">
            {products.map((item,index)=>{
              return <div className='col-md-4' key={index}>
                  <div className="product-card">
        <div className="product-image">
            <img src={item.image.replace('/media/', '/api/media/')} alt="Product Image" style={{height:200,objectFit:'cover'}}/>
        </div>
        <div className="product-info">
            <h2 className="product-title">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.min_bid_amount}</p>
            <p className="product-category">Category:{item.category}</p>
        </div>
      <div className='d-flex justify-content-center align-items-center'>
      <button class="add-to-cart-btn">Add to Cart</button>
      </div>

    </div>
              </div>
            })}
        </div>
      </div>
    </section>
   </div>
  );
};

export default ProductList;
