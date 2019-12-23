import React from "react";
import Container from "react-bootstrap/Container";

const Header = ({ children }) => (
  <header className="masthead" id="heeed">
    <Container>
      <div className="header-text">{children}</div>
    </Container>
  </header>
);

export default Header;
