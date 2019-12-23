import React, { Component } from "react";
import Section from "./Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Tech extends Component {
  render() {
    return (
      <section className="page-section" id="tech">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-heading text-uppercase">Technology</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Section
              title="Engaging"
              blurb="Unity game engine on the client enables head and hand tracking, presentation on multiple client platforms, and all the richness of a gaming application."
              icon="fa-bullhorn"
            />
            <Section
              title="Interactive"
              blurb="Speech recognition and natural language services, combined with smart modeling"
              icon="fa-comments"
            />
            <Section
              title="Cloud-Based"
              blurb="Deep learning feature extraction, geospatial satellite anaytics, and predictive modeling, all in the cloud."
              icon="fa-cloud"
            />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Tech;
