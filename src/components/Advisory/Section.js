import React, { Component } from "react";
import Col from "react-bootstrap/Col";

const Section = (props) => (
  <Col md="4">
    <span className="fa-stack fa-4x">
      <i className="fas fa-circle fa-stack-2x text-primary"></i>
      <i className={"fas " + this.props.icon + " fa-stack-1x fa-inverse"}></i>
    </span>
    <h4 className="advisory-heading">{this.props.title}</h4>
    <p className="text-muted">{this.props.blurb}</p>
  </Col>
);

export default Section;
