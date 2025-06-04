import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";

export default function DashboardStatCard({ status }: { status: any[] }) {
  return (
    <Row className="mb-4">
      {status.map((stat: any, index: any) => (
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
  );
}
