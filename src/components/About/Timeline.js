import React from "react";
import TimeItem from "./TimeItem";
const resumeItems = [
  {
    img: "img/about/1.jpg",
    dates: "Pre-history",
    title: "A Bear Was Born and educated",
    detail:
      "Derek grew up in Hamilton, Ontario. He was a three-time National Junior champion in freestyle wrestling and graduated from Rice University in Houston, Tx. Along the way he worked at MD Anderson Cancer Center in biostatistics and at Compaq."
  },
  {
    img: "img/about/2.jpg",
    dates: "1995-2007",
    title: "Microsoft",
    detail:
      "Starting in a usability/human factors role, Derek quickly moved in to program management on the Windows team and shipped system administration code on Windows 2000 server that remains in the product to this day. Several years leading the speech recognition team in Microsoft Research followed, and then back to the Windows team to build accessibility tools."
  },
  {
    img: "img/about/3.jpg",
    dates: "2008",
    title: "University of Victoria",
    detail:
      "Derek did his masters degree in Computer Science on automated meeting recordings and his PhD on low-cost electroencephalography devices. Both involved data analytics and visualizations on messy, noisy data sources. During this time he also founded the Victoria Makerspace, competed and mentored synthetic biology iGEM teams, and opened Canada's first community biology lab."
  },
  {
    img: "img/about/4.jpg",
    dates: "2015",
    title: "QVirt",
    detail:
      "Derek began working with Yvonne Coady at UVic as her research manager and steered the team towards augmented and virtual reality applications, satellite and GIS applications, and machine learning. Many of the projects emerging from this period are described on the projects page."
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
