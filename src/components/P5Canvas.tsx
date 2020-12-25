import React, { FC } from "react";
import P5Wrapper from "react-p5-wrapper";

const P5Canvas: FC = ({ sketch, ...rest }: any) => (
  <P5Wrapper sketch={sketch} {...rest} />
);

export default P5Canvas;
