import React, { FC } from "react";
import { Canvas } from "react-three-fiber";
import Box from "../three-parts/Box";

const BoxCanvas: FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-4, 0, 0]} />
      <Box position={[4, 0, 0]} />
    </Canvas>
  );
};

export default BoxCanvas;
