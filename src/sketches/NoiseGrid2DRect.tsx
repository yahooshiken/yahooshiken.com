import p5 from "p5";

const drawPoint = (p: p5, x: number, y: number, noiseFactor: number) => {
  const len = 10 * noiseFactor;
  p.rect(x, y, len, len);
};

const NoiseGrid2D = (p: p5): void => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const initial = p.random(10);
    let [xNoise, yNoise] = new Array(2).fill(initial) as number[];

    for (let y = 0; y < p.height; y += 5) {
      yNoise += 0.1;
      xNoise = initial;
      for (let x = 0; x < p.width; x += 5) {
        xNoise += 0.1;

        drawPoint(p, x, y, p.noise(xNoise, yNoise));
      }
    }
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = () => {};
};

export default NoiseGrid2D;
