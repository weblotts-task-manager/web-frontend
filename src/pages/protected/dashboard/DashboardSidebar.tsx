import {
  faBox,
  faCab,
  faChartLine,
  faCog,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Nav } from "react-bootstrap";
import Logout from "../../../components/Logout";
import ThemeToggle from "../../../components/ThemeToggle";

export default function DashboardSidebar() {
  return (
    <Col lg={2} className="sidebar-col d-none d-lg-block vh100">
      <Nav defaultActiveKey="/dashboard" className="flex-column sidebar-nav">
        <Nav.Link href="/dashboard" active>
          <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
          Dashboard
        </Nav.Link>
        <Nav.Link href="/users">
          <FontAwesomeIcon icon={faCab} className="me-2" />
          Vehicles
        </Nav.Link>
        <Nav.Link href="/products">
          <FontAwesomeIcon icon={faBox} className="me-2" />
          Stages
        </Nav.Link>
        <Nav.Link href="/analytics">
          <FontAwesomeIcon icon={faChartLine} className="me-2" />
          Analytics
        </Nav.Link>
        <Nav.Link href="/users">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          Users
        </Nav.Link>
        <Nav.Link href="/settings">
          <FontAwesomeIcon icon={faCog} className="me-2" />
          Settings
        </Nav.Link>
        <div className="sidebar-footer mt-auto d-flex justify-content-between align-items-center">
          <Logout />
          <ThemeToggle />
        </div>
      </Nav>
    </Col>
  );
}
