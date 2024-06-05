import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Unauthorized Access</h2>
              <p className="card-text">
                You are not authorized to access this page. Please contact the administrator for assistance.
              </p>
              <Link to="/" className="btn btn-primary">Go to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
