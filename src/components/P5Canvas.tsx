import React, { FC } from "react";
import p5 from "p5";
import P5Wrapper from "react-p5-wrapper";
import styled from "styled-components";

type Props = {
  sketch: (p: p5) => void;
};

const P5Canvas: FC<Props> = ({ sketch, ...rest }) => (
  <CanvasWrapper>
    <P5Wrapper sketch={sketch} {...rest} />
  </CanvasWrapper>
);

const CanvasWrapper = styled.div``;

export default P5Canvas;
