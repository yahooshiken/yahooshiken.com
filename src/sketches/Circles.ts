import p5, { Color } from "p5";

const Circles = (p: p5): void => {
  class Circle {
    x: number;
    y: number;
    xDiff: number;
    yDiff: number;
    radius: number;
    lineColor: Color;
    fillColor: Color;
    alpha: number;

    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.xDiff = p.random(10) - 5;
      this.yDiff = p.random(10) - 5;
      this.radius = p.random(100);
      this.alpha = p.random(255);
      this.lineColor = p.color(p.random(255), p.random(255), p.random(255));
      this.lineColor.setAlpha(this.alpha);
      this.fillColor = p.color(p.random(255), p.random(255), p.random(255));
      this.fillColor.setAlpha(150);
    }

    draw() {
      p.noStroke();
      p.fill(this.fillColor);
      p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      p.stroke(this.lineColor);
      p.noFill();
      p.ellipse(this.x, this.y, 10, 10);
    }

    update() {
      this.x += this.xDiff;
      this.y += this.yDiff;
      if (this.x > p.width + this.radius) this.x = 0 - this.radius;
      if (this.x < 0 - this.radius) this.x = p.width + this.radius;
      if (this.y > p.height + this.radius) this.y = 0 - this.radius;
      if (this.y < 0 - this.radius) this.y = p.height + this.radius;
      this.draw();
    }
  }
  const circleArray: Circle[] = [];

  const drawCircles = () => {
    const NUM = 5;
    for (let i = 0; i < NUM; i++) {
      const circle = new Circle();
      circle.draw();
      circleArray.push(circle);
    }
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.smooth();
  };
  p.mouseClicked = () => {
    drawCircles();
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = () => {
    p.background(255);
    circleArray.forEach((c) => {
      c.update();
    });
  };
};

export default Circles;
