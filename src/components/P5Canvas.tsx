import React, { FC } from "react";
import { H3, Body1 } from "ui-neumorphism";
import p5 from "p5";
import P5Wrapper from "react-p5-wrapper";
import styled from "styled-components";

type Props = {
  sketch: (p: p5) => void;
  title: string;
  description: string;
};

const P5Canvas: FC<Props> = ({ sketch, title, description, ...rest }) => (
  <CanvasWrapper>
    <P5Wrapper sketch={sketch} {...rest} />
    <DescriptionWrapper>
      <H3 style={{ fontWeight: "bold" }}>{title}</H3>
      <Body1>{description}</Body1>
    </DescriptionWrapper>
  </CanvasWrapper>
);

const CanvasWrapper = styled.div``;

const DescriptionWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px;
  background: rgba(255, 255, 255, 0.5);
`;

export default P5Canvas;
