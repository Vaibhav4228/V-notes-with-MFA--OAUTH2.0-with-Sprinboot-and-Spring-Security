import React from "react";
import { Navigate } from "react-router-dom";
import { useMyContext } from "../store/ContextApi";

const ProtectedRoute = ({ children, adminPage }) => {
 
  const { token, isAdmin } = useMyContext();
  if (!token) {
    return <Navigate to="/login" />;
  }
  if (token && adminPage && !isAdmin) {
    return <Navigate to="/access-denied" />;
  }

  return children;
};

export default ProtectedRoute;


// USING LOCAL STORAGE OPTION FOR OAUTH ISSUE SINCE IT WAS NOT GETTING REDIRECTED.
// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, adminPage = false }) => {
//   const token = localStorage.getItem('JWT_TOKEN');
//   const user = JSON.parse(localStorage.getItem('USER'));

//   console.log("ProtectedRoute: Token:", token);
//   console.log("ProtectedRoute: User:", user);

//   if (!token) {
//     console.log("ProtectedRoute: No token found, redirecting to login");
//     return <Navigate to="/login" />;
//   }

//   if (adminPage && (!user || !user.roles.includes('ADMIN'))) {
//     console.log("ProtectedRoute: User does not have admin rights, redirecting to access denied");
//     return <Navigate to="/access-denied" />;
//   }

//   console.log("ProtectedRoute: Access granted to protected route");
//   return children;
// };

// export default ProtectedRoute;
