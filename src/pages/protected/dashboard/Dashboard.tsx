import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import DashboardNavbar from "../../../containers/DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardNavbar />

      {/* Main Content */}
      <Container fluid className="main-content">
        <Row>
          {/* Sidebar - Desktop */}
          <DashboardSidebar />

          {/* Main Content Area */}
          <Col lg={10} className="content-col">
            <h2 className="mb-4">Dashboard Overview</h2>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
