import p5 from "p5";

const WaveClock = (p: p5): void => {
  let [angleNoise, radiusNoise, xNoise, yNoise] = new Array(4).fill(
    p.random(15)
  ) as number[];
  let angle = -p.PI / 2;
  let strokeCol = 128;
  let strokeChange = -1;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.smooth();
    p.frameRate(50);
    p.background(255);
    p.noFill();
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = () => {
    radiusNoise += 0.2;
    const radius = p.noise(radiusNoise) * 2400;

    angleNoise += 0.001;
    angle += p.noise(angleNoise * 3) - 2;
    if (angle > 360) angle -= 360;
    if (angle < 0) angle += 360;

    xNoise += 0.01;
    yNoise += 0.01;
    const centerX = p.noise(xNoise) * p.width;
    const centerY = p.noise(yNoise) * p.height;

    const radian = p.radians(angle);
    const oppositeRadian = radian + p.PI;
    const x1 = centerX + radius * p.cos(radian);
    const y1 = centerY + radius * p.sin(radian);
    const x2 = centerX + radius * p.cos(oppositeRadian);
    const y2 = centerY + radius * p.sin(oppositeRadian);

    strokeCol += strokeChange;
    if (strokeCol > 127) strokeChange = -1;
    if (strokeCol < 0) strokeChange = 1;
    p.stroke(strokeCol, 60);
    p.strokeWeight(1);

    p.line(x1, y1, x2, y2);
  };
};

export default WaveClock;
