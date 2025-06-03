import { Route, Routes } from "react-router";
import Authentication from "../pages/auth/Authentication";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

export default function AuthNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
