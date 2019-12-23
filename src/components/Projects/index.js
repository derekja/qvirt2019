import React, { Component } from "react";
import Item from "./Item";
import projects from "../Projects/projects.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Projects extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="projects">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </Col>
          </Row>
          <Row>
            {projects
              .filter(project => {
                return project.display;
              })
              .map((value, index) => {
                return (
                  <Item
                    key={index}
                    showModal={this.props.showModal}
                    {...value}
                  />
                );
              })}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Projects;
