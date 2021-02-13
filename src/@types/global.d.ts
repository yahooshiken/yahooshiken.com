/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": ModelViewerJSX;
  }
}

interface ModelViewerJSX {
  src: string;
  alt?: string;
  "skybox-image"?: string;
  "camera-controls"?: boolean;
  "animation-name"?: string;
  "disable-zoom"?: boolean;
  "camera-orbit"?: string;
  autoplay?: boolean;
  style?: CSSProperties;
}

interface ModelViewerElement extends Element {
  currentTime: number;
  play(): void;
  pause(): void;
}
