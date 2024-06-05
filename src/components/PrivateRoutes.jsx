// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const token = localStorage.getItem('token');
//   return token ? <Element {...rest} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
const getUserRoles = () => {
  const isSeller = localStorage.getItem('is_seller') === 'true';
  const isSuperuser = localStorage.getItem('is_superuser') === 'true';
  const isBuyer = localStorage.getItem('is_buyer') === 'true';
  return { isSeller, isSuperuser, isBuyer };
};

const PrivateRoute = ({ element: Element, allowedRoles, ...rest }) => {
  const token = localStorage.getItem('token');
  const { isSeller, isSuperuser, isBuyer } = getUserRoles();

  if (!token) {
    return <Navigate to="/" />;
  }

  const userRoles = [];
  if (isSeller) userRoles.push('seller');
  if (isSuperuser) userRoles.push('superuser');
  if (isBuyer) userRoles.push('buyer');

  const isAuthorized = allowedRoles.some(role => userRoles.includes(role));

  if (!isAuthorized) {
    return <Navigate to="/unauthorized" />; 
  }

  return <Element {...rest} />;
};

export default PrivateRoute;

