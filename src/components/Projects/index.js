import React, { Component } from "react";
import Item from "./Item";
import projects from "../Projects/projects.json";

class Projects extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            {projects
              .filter(project => {
                return project.display;
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
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
