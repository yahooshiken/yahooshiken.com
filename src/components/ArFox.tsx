import React, { FC, useState } from "react";
import useInterval from "@use-it/interval";
import styled from "styled-components";
import { Button } from "ui-neumorphism";
import "@google/model-viewer";

const ANIMATION_KEYS = ["Survey", "Walk", "Run"] as const;
type AnimationKey = typeof ANIMATION_KEYS[number];

const ArFox: FC = () => {
  const [animation, setAnimation] = useState<AnimationKey>("Walk");
  const [xOrbit, setXOrbit] = useState(30);

  const currentIndex = ANIMATION_KEYS.indexOf(animation);
  const nextIndex = (currentIndex + 1) % ANIMATION_KEYS.length;

  const changeAnimation = () => {
    setAnimation(ANIMATION_KEYS[nextIndex]);
  };

  useInterval(() => {
    const next = xOrbit > 360 ? 0 : xOrbit + 0.1;
    setXOrbit(next);
  }, 10);

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={changeAnimation}>{ANIMATION_KEYS[nextIndex]}</Button>
      </ButtonWrapper>
      <model-viewer
        autoplay
        animation-name={animation}
        disable-zoom
        camera-orbit={`${xOrbit}deg 100deg 100%`}
        skybox-image="/assets/scenes/spruit_sunrise.hdr"
        src="/assets/3dmodels/Fox.glb"
        alt="A 3D model of a fox"
        style={{ width: "100%", height: "100vh" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  margin-left: 12px;
  top: 20px;
  right: 20px;
  z-index: 1;
`;

export default ArFox;
