import React, { Component } from "react";

const Wrapper = ({ children }) => (
  <header className="masthead" id="heeed">
    <div className="container">{children}</div>
  </header>
);

export default Wrapper;
