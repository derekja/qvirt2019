import React, { Component } from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import Timeline from "./Timeline";

class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header>
          <div className="heading text-uppercase">Derek's Resume Goes Here</div>
        </Header>
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Timeline />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
