import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";

const NotFound = () => (
  <div>
    <Header>
      <div className="heading text-uppercase">
        Uh oh, we can't find what you were looking for!
      </div>
    </Header>
    <Navigation />
  </div>
);

export default NotFound;
