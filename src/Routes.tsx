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
  // prettier-ignore
  const routes = [
    { path: "/p5_gallery/round", children: <P5Canvas sketch={Circle} title="Round and Round" description="今にも吸い込まれそうな永遠にぐるぐると巻かれる渦からあなたは何を連想しますか？排水溝、渦潮、オウムガイ、蜷局、ぐるぐるバット、ナビエ・ストークス方程式。あ、流体力学の試験で赤点取ったの思い出しました。クソ！！！" /> },
    { path: "/p5_gallery/wave_clock", children: <P5Canvas sketch={WaveClock} title="Wave clock" description="時計は今から6000年ほど前にエジプトで誕生したらしいです。人類最古の時計は日時計で、その後水時計、砂時計と自然の力を利用した様々な種類の時計が発明されていきました。現代の主流となるクォーツ時計が発明されたのは実に1927年のことであります。これから先、どんな時計が発明されていくのでしょうか。ちなみに私は人との待ち合わせ時間を守るのが苦手なクソ人間です。" /> },
    { path: "/p5_gallery/balloon", children: <P5Canvas sketch={Circles} title="Balloon" description="クリックすると円が増えます。子供の頃に遊んだマクドナルドのカラーボールプールみたいですね。そういえばアスレチックが併設しているマクドナルド、昔はたくさんあったのに随分見なくなったように感じますね。ちなみに私は、ダブルチーズバーガーが好きです。" /> },
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
