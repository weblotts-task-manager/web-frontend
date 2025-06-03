import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

export default function Protected() {
  const { auth } = useSelector((state: any) => state.auth);
  const location = useLocation();
  return auth.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} replace />
  );
}
