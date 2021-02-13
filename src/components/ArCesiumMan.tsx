import React, { FC, useState } from "react";
import { Button, H5 } from "ui-neumorphism";
import styled from "styled-components";
import "@google/model-viewer";

// prettier-ignore
const SCENES = {
  AIRCRAFT_WORKSHOP: { displayName: "Aircraft workshop", fileName: "aircraft_workshop.hdr" },
  ARTIST_WORKSHOP: { displayName: "Artist workshop", fileName: "artist_workshop.hdr" },
  BLAUBEUREN_NIGHT: { displayName: "Blaubeuren night", fileName: "blaubeuren_night.hdr" },
  FIREPLACE: { displayName: "Fireplace", fileName: "fireplace.hdr" },
  QUATTRO_CANTI: {displayName: "Quattro canti", fileName: "quattro_canti.hdr"},
  SHANGHAI_BUND: {displayName: "Shanghai bund", fileName: "shanghai_bund.hdr"},
  SMALL_CATHEDRAL: {displayName: "Small cathedral", fileName: "small_cathedral.hdr"},
  SPRUIT_SUNRISE: {displayName: "Spruit sunrise", fileName: "spruit_sunrise.hdr"},
  ST_FAGANS_INTERIOR: {displayName: "St fagans interior", fileName: "st_fagans_interior.hdr"},
  STUDIO_SMALL: {displayName: "Studio small", fileName: "studio_small.hdr"},
  ULMER_MUENSTER: {displayName: "Ulmer muenster", fileName: "ulmer_muenster.hdr"},
  URBAN_STREET: {displayName: "Urban street", fileName: "urban_street.hdr"},
} as const;

type SceneKey = keyof typeof SCENES;

const ArCesiumMan: FC = () => {
  const [sceneKey, setSceneKey] = useState<SceneKey>("ARTIST_WORKSHOP");

  const changeScene = () => {
    const keys = Object.keys(SCENES) as SceneKey[];
    const currentIndex = keys.indexOf(sceneKey);
    const nextIndex = (currentIndex + 1) % keys.length;
    setSceneKey(keys[nextIndex]);
  };

  return (
    <Wrapper>
      <ControlArea>
        <H5>{SCENES[sceneKey].displayName}</H5>
        <ButtonWrapper>
          <Button size="small" onClick={changeScene}>
            New scenes
          </Button>
        </ButtonWrapper>
      </ControlArea>
      <model-viewer
        autoplay
        camera-controls
        disable-zoom
        skybox-image={`/assets/scenes/${SCENES[sceneKey].fileName}`}
        src="/assets/3dmodels/CesiumMan.glb"
        alt="A 3D model of a cesium man"
        style={{ width: "100%", height: "100vh", outline: "none" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const ControlArea = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 360px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.6);
`;

const ButtonWrapper = styled.div`
  margin-left: 12px;
`;

export default ArCesiumMan;
