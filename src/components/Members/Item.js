import React from "react";
import Col from "react-bootstrap/Col";

const Item = (props) => (
  <Col md="3" sm="6" className="members-item">
    <a
      className="members-link"
      data-toggle="modal"
      onClick={() => props.showModal(props.id)}
      href={"#" + props.id}
    >
      <div className="members-hover">
        <div className="members-hover-content">
          <i className="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <img className="img-fluid" src={props.img} alt="" />
    </a>
    <div className="members-caption">
      <h4>{props.name}</h4>
      <p className="text-muted">{props.blurb}</p>
    </div>
  </Col>
);

export default Item;
