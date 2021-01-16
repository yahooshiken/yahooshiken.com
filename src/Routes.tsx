import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import P5Canvas from "./components/P5Canvas";

import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Circle from "./sketches/Circle";
import WaveClock from "./sketches/WaveClock";
import NoiseGrid2D from "./sketches/NoiseGrid2D";
import NoiseGrid2DRect from "./sketches/NoiseGrid2DRect";
import NoiseGrid2DRotate from "./sketches/NoiseGrid2DRotate";
import Circles from "./sketches/Circles";
import AboutPage from "./pages/AboutPage";
import TimelinePage from "./pages/TimelinePage";

const Routes: FC = () => {
  const routes = [
    { path: "/p5_gallery/1", children: <P5Canvas sketch={Circle} /> },
    { path: "/p5_gallery/2", children: <P5Canvas sketch={WaveClock} /> },
    { path: "/p5_gallery/3", children: <P5Canvas sketch={NoiseGrid2D} /> },
    { path: "/p5_gallery/4", children: <P5Canvas sketch={NoiseGrid2DRect} /> },
    {
      path: "/p5_gallery/5",
      children: <P5Canvas sketch={NoiseGrid2DRotate} />,
    },
    { path: "/p5_gallery/6", children: <P5Canvas sketch={Circles} /> },
    { path: "/about", children: <AboutPage /> },
    { path: "/timeline", children: <TimelinePage /> },
    { path: "/", children: <Home /> },
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
