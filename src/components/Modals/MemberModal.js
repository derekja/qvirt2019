import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// this is really just a mockup of what it could be
const MemberModal = (props) => (
  <Modal show={props.show} onHide={props.close} className={props.className}>
    <Modal.Header>{props.title}</Modal.Header>
    <Modal.Body>
      <h2 className="text-uppercase">{props.name}</h2>
      <p className="item-intro text-muted">{props.blurb}</p>
      <img className="img-fluid d-block mx-auto" src={props.img} alt="" />
      <p>{props.text}</p>
      <ul className="list-inline">
        <li>
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            more info
          </a>
        </li>
      </ul>
      <Button data-dismiss="modal" onClick={props.close}>
        <i className="fas fa-times"></i> Close
      </Button>
    </Modal.Body>
  </Modal>
);

export default MemberModal;
