import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Logo from "../../assets/img/project-logo--no-bg.png";
import Logout from "../../components/Logout";
import ThemeToggle from "../../components/ThemeToggle";

export default function MainNavbar() {
  const currentUrl = window.location.pathname;
  const { auth } = useSelector((state: any) => state.auth);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid={currentUrl === "/dashboard"}>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="d-flex justify-content-center align-items-center">
            {auth.isAuthenticated ? (
              <Logout />
            ) : (
              <Nav.Link href="/auth">Login</Nav.Link>
            )}
            <ThemeToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
