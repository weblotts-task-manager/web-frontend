import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import MainFooter from "../../containers/MainFooter";
import MainNavbar from "../../containers/topNavigation/MainNavbar";

const Authentication = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <>
      <MainNavbar />
      <Container className="d-flex align-items-center vh100">
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            lg={7}
            sm={12}
            className="d-flex d-none d-sm-block d-sm-none d-md-block flex-column "
          >
            <div>
              <h2>Authenticate</h2>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam expedita quam veritatis, amet cumque sequi ducimus eos
              dignissimos distinctio enim fugiat. Ipsam at odit illum quod eius,
              iusto ducimus reprehenderit?
            </div>
          </Col>
          <Col lg={5} sm={12} className="">
            <Outlet />
            <div className="d-flex justify-content-start mt-3">
              <Link
                to={
                  currentUrl === "/auth/register" ? "/auth" : "/auth/register"
                }
                className="btn"
              >
                or {currentUrl === "/auth/register" ? "Login" : "Register"}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <MainFooter />
    </>
  );
};
export default Authentication;
