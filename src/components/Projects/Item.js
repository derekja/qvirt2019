import React from "react";
import Col from "react-bootstrap/Col";

const Item = props => (
  <Col md="4" sm="6" className="projects-item">
    <a
      className="projects-link"
      data-toggle="modal"
      onClick={() => props.showModal(props.id)}
      href={"#" + props.id}
    >
      <div className="projects-hover">
        <div className="projects-hover-content">
          <i className="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <img className="img-fluid" src={props.img} alt="" />
    </a>
    <div className="projects-caption">
      <h4>{props.name}</h4>
      <p className="text-muted">{props.blurb}</p>
    </div>
  </Col>
);

export default Item;
