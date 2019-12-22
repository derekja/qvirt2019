import React from "react";
import TimeItem from "./TimeItem";
const resumeItems = [
  {
    img: "img/about/1.jpg",
    dates: "2004",
    title: "A Bear Was Born",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  },
  {
    img: "img/about/1.jpg",
    dates: "2005",
    title: "A Bear Had Some Cheese For The First Time",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  },
  {
    img: "img/about/1.jpg",
    dates: "2005",
    title: "A Bear Was Born Again",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  },
  {
    img: "img/about/1.jpg",
    dates: "2009-2011",
    title: "A Bear Happened Upon A Map",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  }
];

const Timeline = props => {
  return (
    <ul className="timeline">
      {resumeItems.map((value, index) => {
        return <TimeItem key={index} index={index} {...value} />;
      })}
      <li className="timeline-inverted">
        <div className="timeline-image">
          <h4>
            Be Part
            <br />
            Of Our
            <br />
            Story!
          </h4>
        </div>
      </li>
    </ul>
  );
};

export default Timeline;
