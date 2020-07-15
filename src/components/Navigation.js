import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
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
          <Navbar.Brand href="/#page-top">
            <img
              src="/img/pcca_logo_h_dark.png"
              width="auto"
              height={this.state.shrink ? "70" : "90"}
              className="d-inline-block align-top"
              alt="PCCA logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto text-uppercase">
              <Nav.Link href="/education">education</Nav.Link>
              {/* <Nav.Link href="/#projects">projects</Nav.Link> */}
              {/* <Nav.Link href="/founder">about</Nav.Link> */}
              <Nav.Link href="/#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;
