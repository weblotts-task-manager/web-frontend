import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  authValueChange,
  refreshTokenAction,
} from "../features/auth/authSlice";

const useAuth = () => {
  const { auth } = useSelector((state: any) => state.auth) || {};
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (!auth?.isAuthenticated) {
      const authObj = JSON.parse(localStorage.getItem("auth") || "{}");

      if (authObj?.token) {
        dispatch(refreshTokenAction({ ...authObj }));
      } else {
        dispatch(authValueChange({ key: "loading", value: false }));
      }
    }
  }, [auth?.isAuthenticated, location]);

  return auth;
};

export default useAuth;
