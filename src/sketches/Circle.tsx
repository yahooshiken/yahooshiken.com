import p5 from "p5";

const Circle = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    const [centerX, centerY] = [p.windowWidth / 2, p.windowHeight / 2];
    let radius = 10;
    let radiusNoise = p.random(10);

    p.stroke(20, 50, 70, 20);
    let x, y, lastX, lastY;
    for (let angle = 0; angle < 360 * 10; angle += 5) {
      const rad = p.radians(angle);
      radius += 0.5;
      radiusNoise += 0.05;
      const r = radius + p.noise(radiusNoise) * 200 - 100;
      x = centerX + r * p.cos(rad);
      y = centerY + r * p.sin(rad);
      if (lastX && lastY) {
        p.line(x, y, lastX, lastY);
      }
      [lastX, lastY] = [x, y];
    }
  };
};

export default Circle;
