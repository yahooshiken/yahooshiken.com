import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Routes: FC = () => (
  <Router>
    <Link to="/1">to 1</Link>
    <Switch>
      <Route path="/1">1</Route>
      <Route path="/2">2</Route>
      <Route path="/">Home</Route>
    </Switch>
  </Router>
);

export default Routes;
