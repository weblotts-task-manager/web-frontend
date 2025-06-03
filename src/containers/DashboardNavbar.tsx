import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function DashboardNavbar() {
  const { auth } = useSelector((state: any) => state.auth);
  return (
    <Navbar bg="light" expand="lg" className="top-navbar">
      <Container fluid>
        <Button
          variant="light"
          // onClick={handleShow}
          className="me-3 d-lg-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Navbar.Brand href="/dashboard">Zanzu Dashboard</Navbar.Brand>

        <div className="d-flex align-items-center ms-auto">
          <div className="search-box me-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                disabled
              />
              <Button variant="outline-secondary" disabled>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </div>

          <Nav className="align-items-center">
            <Nav.Link href="/profile" className="user-profile">
              <img
                src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg"
                alt="User"
                className="rounded-circle me-2"
              />
              {auth.user.user.name}
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
