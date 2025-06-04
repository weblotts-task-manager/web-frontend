import { Route, Routes } from "react-router";
// import Protected from "../pages/auth/Protected";
import Protected from "../pages/auth/Protected";
import DashboardLayout from "../pages/layout/DashboardLayout";
import ProfileLayout from "../pages/layout/ProfileLayout";
import DashboardHomePage from "../pages/protected/dashboard/DashboardHomePage";
import ProfilePage from "../pages/protected/profile/ProfilePage";

const ProtectedRoutes = () => (
  <Routes>
    <Route path="/" element={<Protected />}>
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfilePage />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
      </Route>
    </Route>
  </Routes>
);
export default ProtectedRoutes;
