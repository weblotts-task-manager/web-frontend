import {
  faBell,
  faBox,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

export default function DashboardHomePage() {
  // Sample data for dashboard cards
  const stats = [
    {
      title: "Total Users",
      value: "2,456",
      change: "+12%",
      icon: faUsers,
      variant: "primary",
    },
    {
      title: "Revenue",
      value: "$9,845",
      change: "+18%",
      icon: faChartLine,
      variant: "success",
    },
    {
      title: "Products",
      value: "1,234",
      change: "+5%",
      icon: faBox,
      variant: "info",
    },
    {
      title: "Pending Orders",
      value: "56",
      change: "-2%",
      icon: faBox,
      variant: "warning",
    },
  ];
  return (
    <>
      {/* Stats Cards */}
      <Row className="mb-4">
        {stats.map((stat, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className="mb-3">
            <Card className="stat-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-muted mb-2">{stat.title}</h6>
                    <h3 className="mb-0">{stat.value}</h3>
                    <small className={`text-${stat.variant}`}>
                      {stat.change}
                    </small>
                  </div>
                  <div className={`icon-circle bg-${stat.variant}-light`}>
                    <FontAwesomeIcon
                      icon={stat.icon}
                      className={`text-${stat.variant}`}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts and Tables Section */}
      <Row>
        <Col lg={8} className="mb-4">
          <Card>
            <Card.Header>
              <Card.Title>Sales Overview</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chart-placeholder" style={{ height: "300px" }}>
                {/* In a real app, you would integrate a charting library here */}
                <p className="text-center text-muted py-5">
                  Sales chart will be displayed here
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-4">
          <Card>
            <Card.Header>
              <Card.Title>Recent Activities</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="activity-list">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="activity-item mb-3">
                    <div className="d-flex">
                      <div className="activity-icon me-3">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h6 className="mb-1">New order received #{item}234</h6>
                        <p className="text-muted mb-0">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="px-0">
                View all activities
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Orders Table */}
      <Row>
        <Col xs={12} className="mb-4">
          <Card>
            <Card.Header>
              <Card.Title>Recent Orders</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2].map((item) => (
                      <tr key={item}>
                        <td>#ORD{item}234</td>
                        <td>Customer {item}</td>
                        <td>2023-05-{10 + item}</td>
                        <td>${(item * 125).toFixed(2)}</td>
                        <td>
                          <Badge bg={item % 2 === 0 ? "success" : "warning"}>
                            {item % 2 === 0 ? "Completed" : "Pending"}
                          </Badge>
                        </td>
                        <td>
                          <Button variant="outline-primary" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
