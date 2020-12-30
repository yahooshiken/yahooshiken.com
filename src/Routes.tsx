import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import P5Canvas from "./components/P5Canvas";

import Sidebar from "./components/Sidebar";
import Circle from "./sketches/Circle";
import WaveClock from "./sketches/WaveClock";
import NoiseGrid2D from "./sketches/NoiseGrid2D";

const Routes: FC = () => {
  const routes = [
    { path: "/1", children: <P5Canvas sketch={Circle} /> },
    { path: "/2", children: <P5Canvas sketch={WaveClock} /> },
    { path: "/3", children: <P5Canvas sketch={NoiseGrid2D} /> },
    { path: "/", children: "Home" },
  ];

  return (
    <Router>
      <Sidebar>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              {route.children}
            </Route>
          ))}
        </Switch>
      </Sidebar>
    </Router>
  );
};
export default Routes;
