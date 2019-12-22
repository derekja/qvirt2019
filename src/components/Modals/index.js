import React, { Component } from "react";
import ProjectModal from "./ProjectModal";
import projects from "../Projects/projects.json";

class Modals extends Component {
  render() {
    const modals = [...projects];
    return (
      <div id="modals">
        {modals.map((value, index) => {
          return (
            <ProjectModal
              key={index}
              {...value}
              {...this.props}
              show={this.props.curModal === value.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Modals;
