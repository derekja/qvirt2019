import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import About from "./components/About";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/founder" component={About} />
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
