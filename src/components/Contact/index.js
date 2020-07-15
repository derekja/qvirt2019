import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  return (
    <section className="page-section" id="contact">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading">
              Please send an email to{" "}
              <a href="mailto:info@coastalcomputing.ca">
                info@coastalcomputing.ca
              </a>
              .
            </h3>
          </Col>
        </Row>
        {/* <Row>
          <Col lg="12">
            <ContactForm handleSubmit={() => console.log("submit")} />
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default Contact;
