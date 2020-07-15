import React, { Component } from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Contact from "../Contact";

const Education = (props) => (
  <div>
    <Navigation />
    <Header>
      <div className="heading text-uppercase">Education</div>
      <div className="intro-lead-in">
        Capacity building for digital programs
      </div>
    </Header>
    <section className="page-section" id="education">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            {/* <h2 className="section-heading text-uppercase">About</h2> */}
            <p className="section-subheading text-muted">
              The PCCA mission to support capacity building for digital programs
              has led to the formation of a project aimed at empowering youth or
              individuals that are re-training to master digital technologies
              for cloud computing. These programs are in the midst of
              development for certification of educational credit. As part of
              the work on the Earth Data Store (EDS), we have developed some
              tools and techniques for using the Microsoft Azure platform for
              storing geospatial data, but the underlying techniques will apply
              to any cloud platform.
            </p>
            <p className="section-subheading text-muted">
              In preparation for a{" "}
              <a
                href="https://www.digitalsupercluster.ca/capacity-building-call-for-projects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                digital supercluster capacity building call for projects
              </a>
              , we are submitting a proposal that aims to assist in the
              development of digital skills. It has been written to build on the
              EDS project, so there is an emphasis on geospatial data, but in
              reality the parameters for the projects themselves are flexible
              enough to accommodate most student interests. The program is
              designed as a paired learning experience. In previous summers
              students from the Verna Kirkness program have visited our lab at
              the University of Victoria. These high school students were
              visiting for a couple weeks to get a taste of university life in
              an engineering program. The pairing with university students in
              the lab was a fruitful and exciting learning experience on both
              sides. In this new age of potentially reduced social interaction,
              it is wise to consider what elements of a paired in-person
              experience would apply to remote collaboration.
            </p>
            <p className="section-subheading text-muted">
              Although we use the example of the high school students, the
              target of this program is not (just) high school students. The
              goal is to develop cloud computing competency at a local level, to
              enable development of the technological capacity to securely
              create, manage, backup, and control access to cloud computing
              applications and data sources. The implicit goal is to share the
              tools to enable a true data sovereignty built on top of commercial
              cloud services. As such, a mid-career professional looking to add
              a new competency is a great candidate for the program.
            </p>
            <p className="section-subheading text-muted">
              On the university side, many students in co-op programs have had
              difficulty in finding placements due to current social isolation
              restrictions. The goal here is to allow current students who have
              the core computing skills to assist in the project developed by
              the community partner. This assistance will be remote and
              delivered through email, videoconference and AR/VR interactions.
              Both the university student and the community student are
              envisioned as paid internship positions and support for the
              hardware and cloud resources has been worked into the proposal.
            </p>
            <p className="section-subheading text-muted">
              To get on the PCCA education email list, please send Yvonne an
              email at{" "}
              <a href="mailto:ycoady@coastalcomputing.ca">
                ycoady@coastalcomputing.ca
              </a>
            </p>
            <p className="section-subheading text-muted">
              This email list is low noise, and is where we will announce new
              programs and requests for partners.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="12"></Col>
        </Row>
      </Container>
    </section>

    <Footer />
  </div>
);

export default Education;
