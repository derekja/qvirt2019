import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = props => {
  let validated = false;

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("problem found");
      event.preventDefault();
      event.stopPropagation();
    } else {
      validated = true;
    }
  };

  return (
    <Form
      id="contactForm"
      name="sentMessage"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row>
        <Col md="6">
          <Form.Group>
            <Form.Control
              id="name"
              type="text"
              placeholder="Your Name *"
              required
              disabled
              //data-validation-required-message="Please enter your name."
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="email"
              type="email"
              placeholder="Your Email *"
              required
              data-validation-required-message="Please enter your email."
              disabled
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.Control
              as="textarea"
              id="message"
              placeholder="Your Message *"
              required
              disabled
            />
          </Form.Group>
        </Col>
        <div className="clearfix"></div>
        <Col lg="12" className="text-center">
          <div id="success"></div>
          <Button
            id="sendMessageButton"
            className="btn-xl text-uppercase"
            type="submit"
            disabled
          >
            Send Message
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
