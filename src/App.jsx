import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import Admin from "./pages/admin/Admin";
import UserStatus from "./pages/admin/UserStatus";
import ProductList from "./pages/user/ProductList";
import DeleteProducts from "./pages/admin/DeleteProducts";
import BlockUser from "./pages/admin/BlockUser";
import User from "./pages/user/User";
import SellProduct from "./pages/user/SellProduct";
import SellerSignup from './components/SellerSignup';
import Products from './pages/user/Products';
import Seller from "./seller/Seller";
import ViewProducts from "./seller/ViewProducts";
import PrivateRoute from "./components/PrivateRoutes";
import UnauthorizedPage from "./components/Unauthorized";
import CreateSellerBuyerAccount from "./components/CreateSellerBuyerAccount";
import ProductListAdmin from "./pages/admin/ProductList";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      
        <Route path="/account" element={<CreateSellerBuyerAccount />} />
        <Route path="/admin" element={<PrivateRoute element={Admin} allowedRoles={['superuser']} />} />
        <Route path="/users" element={<PrivateRoute element={UserStatus} allowedRoles={['superuser']} />} />
        <Route path="/products" element={<PrivateRoute element={ProductList} allowedRoles={['superuser']} />} />
        <Route path="/delete_products" element={<PrivateRoute element={DeleteProducts} allowedRoles={['superuser']} />} />
        <Route path="/block_user" element={<PrivateRoute element={BlockUser} allowedRoles={['superuser']} />} />
        <Route path="/user" element={<PrivateRoute element={User} allowedRoles={['buyer']} />} />
        <Route path="/sproducts" element={<PrivateRoute element={ProductListAdmin} allowedRoles={['superuser']} />} />
        {/* Buyer Path */}
        <Route path="/userSignup" element={<Signup />} />
        <Route path="/products" element={<PrivateRoute element={Products} allowedRoles={['buyer']} />} />
        {/* End of Buyer Path */}
        {/* Seller Path */}
        <Route path="/sellerSignup" element={<SellerSignup />} />
        <Route path="/seller" element={<PrivateRoute element={Seller} allowedRoles={['seller']} />} />
        <Route path="/add_product" element={<PrivateRoute element={SellProduct} allowedRoles={['seller']} />} />
        <Route path="/view" element={<PrivateRoute element={ViewProducts} allowedRoles={['seller']} />} />
        {/* End of Seller Path */}
        <Route path="/unauthorized" element={<UnauthorizedPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
