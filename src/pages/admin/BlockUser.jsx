// import React from "react";

// const BlockUser = () => {
//   return (
//     <div className="container">
//       <h2 className="mt-5 mb-4">Block Users</h2>
//       <table className="table align-middle mb-0 bg-white">
//         <thead className="bg-light">
//           <tr>
//             <th>Name</th>
//             <th>Status</th>
//             <th>Points</th>
//             <th>Block Status</th>
//             <th>Block User</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://mdbootstrap.com/img/new/avatars/8.jpg"
//                   alt=""
//                   style={{ width: 45, height: 45 }}
//                   className="rounded-circle"
//                 />
//                 <div className="ms-3">
//                   <p className="fw-bold mb-1">John Doe</p>
//                   <p className="text-muted mb-0">john.doe@gmail.com</p>
//                 </div>
//               </div>
//             </td>
//             <td>
//               <p className="fw-normal mb-1">Software engineer</p>
//               <p className="text-muted mb-0">IT department</p>
//             </td>
//             <td>
//               <span
//                 className="badge badge-success rounded-pill d-inline"
//                 style={{ color: "#000" }}
//               >
//                 Active
//               </span>
//             </td>
//             <td>Senior</td>
//             <td>
//               <button
//                 type="button"
//                 className="btn btn-link btn-sm btn-rounded"
//                 style={{
//                   background: "green",
//                   color: "#FFF",
//                   textDecoration: "none",
//                 }}
//               >
//                 <i className="bi bi-ban"></i>
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://mdbootstrap.com/img/new/avatars/6.jpg"
//                   className="rounded-circle"
//                   alt=""
//                   style={{ width: 45, height: 45 }}
//                 />
//                 <div className="ms-3">
//                   <p className="fw-bold mb-1">Alex Ray</p>
//                   <p className="text-muted mb-0">alex.ray@gmail.com</p>
//                 </div>
//               </div>
//             </td>
//             <td>
//               <p className="fw-normal mb-1">Consultant</p>
//               <p className="text-muted mb-0">Finance</p>
//             </td>
//             <td>
//               <span
//                 className="badge badge-primary rounded-pill d-inline"
//                 style={{ color: "#000" }}
//               >
//                 Onboarding
//               </span>
//             </td>
//             <td>Junior</td>
//             <td>
//               <button
//                 type="button"
//                 className="btn btn-link btn-rounded btn-sm fw-bold"
//                 data-mdb-ripple-color="dark"
//                 style={{
//                   background: "green",
//                   color: "#FFF",
//                   textDecoration: "none",
//                 }}
//               >
//                 <i className="bi bi-ban"></i>
//               </button>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://mdbootstrap.com/img/new/avatars/7.jpg"
//                   className="rounded-circle"
//                   alt=""
//                   style={{ width: 45, height: 45 }}
//                 />
//                 <div className="ms-3">
//                   <p className="fw-bold mb-1">Kate Hunington</p>
//                   <p className="text-muted mb-0">kate.hunington@gmail.com</p>
//                 </div>
//               </div>
//             </td>
//             <td>
//               <p className="fw-normal mb-1">Designer</p>
//               <p className="text-muted mb-0">UI/UX</p>
//             </td>
//             <td>
//               <span
//                 className="badge badge-warning rounded-pill d-inline"
//                 style={{ color: "#000" }}
//               >
//                 Awaiting
//               </span>
//             </td>
//             <td>Senior</td>
//             <td>
//               <button
//                 type="button"
//                 className="btn btn-link btn-rounded btn-sm fw-bold"
//                 data-mdb-ripple-color="dark"
//                 style={{
//                   background: "green",
//                   color: "#FFF",
//                   textDecoration: "none",
//                 }}
//               >
//                 <i className="bi bi-ban"></i>
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BlockUser;
// DetectMultipleSellerAccounts.js

import React, { useState } from 'react';
import axios from 'axios';

const DetectMultipleSellerAccounts = () => {
    const [multipleAccounts, setMultipleAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleCheck = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8000/api/detect_duplicate_sellers/');
            console.log("Multiple User Response is:",response)
            setMultipleAccounts(response.data.sellers_with_multiple_accounts);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
            alert("Error occurred while checking accounts");
        }
    };

    return (
        <div>
            <button onClick={handleCheck} disabled={loading}>
                {loading ? 'Checking...' : 'Check Multiple Seller Accounts'}
            </button>
            {multipleAccounts.length > 0 && (
                <div>
                    <h3>Sellers with Multiple Accounts:</h3>
                    <ul>
                        {multipleAccounts.map((username, index) => (
                            <li key={index}>{username}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DetectMultipleSellerAccounts;
