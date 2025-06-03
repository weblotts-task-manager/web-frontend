import { Route, Routes } from "react-router";
import Protected from "../pages/auth/Protected";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/protected/dashboard/Dashboard";
import DashboardHomePage from "../pages/protected/dashboard/DashboardHomePage";
import PageWrapper from "../pages/protected/PageWrapper";
import ProfilePage from "../pages/protected/profile/ProfilePage";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/*" element={<AuthNavigation />} />
      <Route element={<Protected />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHomePage />} />
        </Route>
        <Route element={<PageWrapper />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
