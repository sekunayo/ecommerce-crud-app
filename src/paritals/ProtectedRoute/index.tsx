import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  auth: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ auth, children }: ProtectedRouteProps) => {
  if (auth) {
    return <Navigate to="/cart" replace />;
  }
  return children;
};

export default ProtectedRoute;
