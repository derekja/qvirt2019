import React from "react";

const Header = ({ children }) => (
  <header className="masthead" id="heeed">
    <div className="container">
      <div className="header-text">{children}</div>
    </div>
  </header>
);

export default Header;
