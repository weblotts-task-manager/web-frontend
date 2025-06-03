import { Container } from "react-bootstrap";
import MainNavbar from "../containers/topNavigation/MainNavbar";

export default function NotFound() {
  return (
    <>
      <MainNavbar />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center vh100"
      >
        Not Found!
      </Container>
    </>
  );
}
