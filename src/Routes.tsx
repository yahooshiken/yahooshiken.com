import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import P5Canvas from "./components/P5Canvas";
import Sidebar from "./components/Sidebar";
import Ball from "./sketches/Ball";

const Routes: FC = () => (
  <Router>
    <Sidebar />
    <Switch>
      <Route path="/1">
        <P5Canvas sketch={Ball} />
      </Route>
      <Route path="/2">2</Route>
      <Route path="/">Home</Route>
    </Switch>
  </Router>
);

export default Routes;
