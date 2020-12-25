import p5 from "p5";

const WaveClock = (p: p5) => {
  let [angleNoise, radiusNoise, xNoise, yNoise] = new Array(4).fill(
    p.random(15)
  );
  let angle = -p.PI / 2;
  let strokeCol = 254;
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
    const radius = p.noise(radiusNoise) * 2400 + 2;

    angleNoise += 0.001;
    angle += p.noise(angleNoise * 6) - 3;
    if (angle > 360) angle -= 360;
    if (angle < 0) angle += 360;

    xNoise += 0.01;
    yNoise += 0.01;
    const centerX = p.width / 2 + p.noise(xNoise) * 100 - 50;
    const centerY = p.height / 2 + p.noise(yNoise) * 100 - 50;

    const radian = p.radians(angle);
    const oppositeRadian = radian + p.PI;
    const x1 = centerX + radius * p.cos(radian);
    const y1 = centerY + radius * p.sin(radian);
    const x2 = centerX + radius * p.cos(oppositeRadian);
    const y2 = centerY + radius * p.sin(oppositeRadian);

    strokeCol += strokeChange;
    if (strokeCol > 254) strokeChange = -1;
    if (strokeCol < 0) strokeChange = 1;
    p.stroke(strokeCol, 60);
    p.strokeWeight(1);

    p.line(x1, y1, x2, y2);
  };
};

export default WaveClock;
