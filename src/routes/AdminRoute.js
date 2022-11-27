import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../hooks/useSeller";
import LoaderPage from "../Utilities/LoaderPage";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [sellerUser, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <LoaderPage />;
  }

  if (user?.uid && sellerUser?.account === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
