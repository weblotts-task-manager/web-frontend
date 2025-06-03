import { Container } from "react-bootstrap";

export default function MainFooter() {
  return (
    <footer>
      <Container className="d-flex flex-wrap justify-content-between align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          &copy;{new Date().getFullYear()} Davies Wabuluka
        </span>
      </Container>
    </footer>
  );
}
