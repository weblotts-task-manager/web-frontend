import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../../routes/useAuth";

export default function Protected() {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <p>Auth Loading...</p>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
}

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <p>Auth Loading...</p>;
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};
