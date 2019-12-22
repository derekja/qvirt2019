import React from "react";

const TimeItem = props => {
  let inverted = props.index % 2 === 0 ? "" : "timeline-inverted";
  return (
    <li className={inverted}>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={props.img} alt="" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.dates}</h4>
          <h4 className="subheading">{props.title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{props.detail}</p>
        </div>
      </div>
    </li>
  );
};

export default TimeItem;
