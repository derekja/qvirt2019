import React, { Component } from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import Timeline from "./Timeline";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Contact from "../Contact";

const About = (props) => (
  <div>
    <Navigation />
    <Header>
      <div className="heading text-uppercase">Derek's Timeline</div>
    </Header>
    <section className="page-section" id="about">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              A bit of history about the QVirt founder
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Timeline />
          </Col>
        </Row>
      </Container>
    </section>
    <Contact />
    <Footer />
  </div>
);

export default About;
