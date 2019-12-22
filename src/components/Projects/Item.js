import React from "react";

const Item = props => (
  <div className="col-md-4 col-sm-6 projects-item">
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
  </div>
);

export default Item;
