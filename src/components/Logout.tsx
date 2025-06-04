import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return <Nav.Link onClick={handleLogout}>Logout</Nav.Link>;
}
