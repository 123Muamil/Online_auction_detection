import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseISO, formatDistanceToNow } from 'date-fns';
import profile from '../../assessts/images/profile.png';
const UserStatus = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get('https://online-auction-detection-backend.vercel.app/api/users/');
      setUsers(response.data);
    } catch (error) {
      console.log("Error while fetching users:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">User Status</h2>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Active Status</th>
            <th>Block Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user:any, index) => {
            const lastLoginDate = user.last_login ? parseISO(user.last_login) : null as any;
            const now = new Date() as any;
            const daysDifference = lastLoginDate ? (now - lastLoginDate) / (1000 * 60 * 60 * 24) : null;
            const isActive = daysDifference !== null ? daysDifference <= 30 : false;

            return (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={profile}
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.username}</p>
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{user.is_superuser && 'admin' || user.is_seller && 'seller' || user.is_buyer && 'buyer'}</p>
                </td>
                <td>
                  <span className="badge badge-success rounded-pill d-inline" style={{ color: '#000' }}>
                    {isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
             
                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded" style={{ background: 'green', color: '#FFF', textDecoration: 'none' }}>
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserStatus;
