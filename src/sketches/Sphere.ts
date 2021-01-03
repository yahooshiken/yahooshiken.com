import p5 from "p5";

const Sphere = (p: p5): void => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, "webgl");
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = () => {
    p.sphere(100);
  };
};

export default Sphere;
