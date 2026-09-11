import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth, homeRouteForRole } from "../context/AuthContext.jsx";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for AuthContext to restore the user from localStorage
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6EE]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#E6E1D3] border-t-[#1E4D38]" />

          <p className="mt-4 text-sm font-medium text-[#647067]">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // Logged in but wrong role
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    return (
      <Navigate
        to={homeRouteForRole(user.role)}
        replace
      />
    );
  }

  // Authenticated + authorized
  return children;
}