import React, { FC } from "react";
import P5Wrapper from "react-p5-wrapper";
import styled from "styled-components";

const P5Canvas: FC = ({ sketch, ...rest }: any) => (
  <CanvasWrapper>
    <P5Wrapper sketch={sketch} {...rest} />
  </CanvasWrapper>
);

const CanvasWrapper = styled.div``;

export default P5Canvas;
