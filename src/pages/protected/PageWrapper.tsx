import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import MainFooter from "../../containers/MainFooter";
import MainNavbar from "../../containers/topNavigation/MainNavbar";

export default function PageWrapper() {
  return (
    <>
      <MainNavbar />
      <Container className="vh100">
        <Outlet />
      </Container>
      <MainFooter />
    </>
  );
}
