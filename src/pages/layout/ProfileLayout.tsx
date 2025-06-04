import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import MainFooter from "../../containers/MainFooter";
import MainNavbar from "../../containers/topNavigation/MainNavbar";

const ProfileLayout = () => (
  <>
    <MainNavbar />
    <Container className="vh100">
      <Outlet />
    </Container>
    <MainFooter />
  </>
);

export default ProfileLayout;
