import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md="4">
            <span className="copyright">Copyright &copy; PCCA 2020</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
