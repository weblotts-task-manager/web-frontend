import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AuthRoutes from "./AuthRoutes";
import ProjectedRoutes from "./ProtectedRoutes";
import useAuth from "./useAuth";

const MainRouter = () => {
  useAuth();

  return (
    <Routes>
      <Route path="/dashboard/*" element={<ProjectedRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
