import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Staff = (props) => (
  <section className="bg-white page-section" id="staff">
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h2 className="section-heading text-uppercase">
            Directors and Staff
          </h2>
          <h3 className="section-subheading text-muted">
            We will have an updated list coming soon!
          </h3>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Staff;
