import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { AppDispatch } from "../app/store";
import { logout } from "../features/auth/authSlice";
import useLogoutHook from "../hooks/useLogoutHook";

export default function Logout() {
  const dispatch = useDispatch<AppDispatch>();
  const { auth } = useSelector((state: any) => state.auth);
  console.log(auth);
  const { mutate } = useLogoutHook();
  const navigate = useNavigate();
  function handleLogout() {
    try {
      mutate(auth.user.refreshToken);

      if (dispatch(logout())) {
        navigate("/auth");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <a type="button" onClick={handleLogout} className="btn">
      <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
      Logout
    </a>
  );
}
