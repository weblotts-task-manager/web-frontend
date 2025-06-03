import { Col, Container, Row } from "react-bootstrap";
import MainNavbar from "../containers/topNavigation/MainNavbar";

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <Container>
        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            explicabo obcaecati perspiciatis fugiat nihil nemo consequatur quia
            et aliquid doloribus soluta odit voluptatibus culpa, exercitationem
            incidunt quisquam sunt odio veritatis.
          </Col>
        </Row>
      </Container>
    </>
  );
}
