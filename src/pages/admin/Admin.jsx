import React from "react";
import AdminNavbar from "./AdminNavbar";
import UserStatus from "./UserStatus";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";
const Admin = () => {
  const location = useLocation();

  return (
    <div>
      <AdminNavbar />
      <HeroSection/>
      {location.pathname === "/users" && (
        <div className="d-flex justify-content-center align-items-center">
          <UserStatus />
        </div>
      )}
    </div>
  );
};

export default Admin;
