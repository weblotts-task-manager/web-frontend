import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { auth } = useSelector((state: any) => state.auth);
  return (
    <Row>
      <Col
        md={12}
        className="d-flex justify-content-center align-items-center text-center rounded vh100"
        // style={{ minHeight: "450px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <img
            className="py-2 mb-3 rounded-circle"
            width="200px"
            src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg"
          />
          <span className="h3 text-uppercase">{auth.user.user.name}</span>
          <code className="h5 text-secondary">{auth.user.user.email}</code>
        </div>
      </Col>
    </Row>
  );
}
