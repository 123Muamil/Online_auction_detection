import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../styles/styles.css'
import SellerNavbar from './SellerNavbar'
const ViewProducts = () => {
  const [products,setAllProducts]=useState([])
  // console.log("The product is:",products)
  const username=localStorage.getItem('username')
  useEffect(() => {
    getAllProducts()
  }, [])
  const getAllProducts=async()=>{
     try {
       const response= await axios.get('http://localhost:8000/api/all-products/')
      //  console.log("The response A is:",response.data)
       setAllProducts(response.data.filter((item)=>item.seller_username===username))
     } catch (error) {
     }
  }
  const deleteProduct=async(id)=>{
    // console.log("The id is:",id)
    const token = localStorage.getItem('token');
    console.log("The token is:",token)
    try {
      const response = await axios.delete(`http://localhost:8000/api/products/${id}/`, {
        headers: {
          'Authorization': `Token ${token}`, // Use the stored token here
          'Content-Type': 'application/json'
        }
      });
      if(response.status===204)
        {
          window.location.reload();
        }
    } catch (error) {
      console.log("Error while deleting product",error)
    }
  }
  return (
   <div>
    <SellerNavbar/>
     <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center mb-3">
        {products.length === 0 ? (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
) : (
  products.map((item, index) => {
    return (
      <div className='col-md-4' key={index}>
        <div className="product-card">
          <div className="product-image">
            <img src={item.image.replace('/media/', '/api/media/')} alt="Product Image" style={{ height: 200, objectFit: 'cover' }} />
          </div>
          <div className="product-info">
            <h2 className="product-title">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.min_bid_amount}</p>
            <p className="product-category">Category: {item.category}</p>
          </div>
          <div className="product-actions">
            <i className="bi bi-pencil-square" title="Edit"></i>
            <i className="bi bi-trash" title="Delete" onClick={() => deleteProduct(item.id)}></i>
          </div>
        </div>
      </div>
    );
  })
)}

        </div>
      </div>
    </section>
   </div>
  )
}

export default ViewProducts