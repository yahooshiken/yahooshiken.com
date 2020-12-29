import p5 from "p5";

const NoiseGrid2D = (p: p5): void => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const initial = p.random(10);
    let [xNoise, yNoise] = new Array(2).fill(initial) as number[];

    for (let y = 0; y < p.height; y += 1) {
      yNoise += 0.01;
      xNoise = initial;
      for (let x = 0; x < p.width; x += 1) {
        xNoise += 0.01;
        const alpha = p.noise(xNoise, yNoise) * 255;
        p.stroke(0, alpha);
        p.point(x, y);
      }
    }
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = () => {};
};

export default NoiseGrid2D;
