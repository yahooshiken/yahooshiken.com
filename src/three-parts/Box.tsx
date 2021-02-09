import React, { FC, useRef, useState } from "react";
import { useFrame, MeshProps } from "react-three-fiber";
import { Mesh } from "three";

const Box: FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [5, 5, 5] : [3, 3, 3]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
