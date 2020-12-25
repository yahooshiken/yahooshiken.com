import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import P5Canvas from "./components/P5Canvas";

import Sidebar from "./components/Sidebar";
import Circle from "./sketches/Circle";
import WaveClock from "./sketches/WaveClock";

const Routes: FC = () => (
  <Router>
    <Sidebar>
      <Switch>
        <Route path="/1">
          <P5Canvas sketch={Circle} />
        </Route>
        <Route path="/2">
          <P5Canvas sketch={WaveClock} />
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </Sidebar>
  </Router>
);

export default Routes;
