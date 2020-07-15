import React, { Component } from "react";
import Item from "./Item";
import members from "../Members/members.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Members = (props) => (
  <section className="bg-primary page-section" id="members">
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h2 className="section-heading text-uppercase">Members</h2>
          <h3 className="section-subheading text-muted">
            We will have an updated list coming soon!
          </h3>
        </Col>
      </Row>
      {/*
          // one possible way to organize members...
           <Row>
            {members
              .filter((member) => {
                return member.display;
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
          </Row> */}
    </Container>
  </section>
);

export default Members;
