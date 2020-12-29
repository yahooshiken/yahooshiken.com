import p5 from "p5";
import { ComponentType } from "react";

declare module "react-p5-wrapper" {
  type P5WrapperComponent = ComponentType<{ sketch: (p: p5) => void }>;
  export default P5WrapperComponent;
}
