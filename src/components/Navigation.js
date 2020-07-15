import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    this.setState({ shrink: window.scrollY > 100 });
  };

  render() {
    return (
      <Navbar
        expand="lg"
        id="mainNav"
        variant="dark"
        fixed="top"
        className={this.state.shrink ? "navbar-shrink" : ""}
      >
        <div className="container">
          <Navbar.Brand className="js-scroll-trigger" href="#page-top">
            <img
              src="/img/QVirt_Logo.svg"
              width="auto"
              height={this.state.shrink ? "70" : "90"}
              className="d-inline-block align-top"
              alt="QVirt logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto text-uppercase">
              <Nav.Link className="js-scroll-trigger" href="/#tech">
                technology
              </Nav.Link>
              <Nav.Link className="js-scroll-trigger" href="/#projects">
                projects
              </Nav.Link>
              <Nav.Link className="js-scroll-trigger" href="/founder">
                about
              </Nav.Link>
              <Nav.Link className="js-scroll-trigger" href="/#contact">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;
