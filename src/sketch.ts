import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);
    p.background(0);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.stroke(255);
    p.noFill();
    p.blendMode(p.ADD);

    const NUM = 100;
    let arr: number[][] = Array(NUM).fill([
      p.windowWidth / 2,
      p.windowHeight / 2,
    ]);

    arr = arr.map(([x, y]) => {
      return [x + p.random(-200, 200), y + p.random(-200, 200)];
    });

    arr.forEach(([x, y]) => {
      p.point(x, y);
    });

    p.blendMode(p.BLEND);
    p.fill(0, 5);
    p.rect(100, 100, p.windowWidth / 2, p.windowHeight / 2);
  };
};

const sketchP = new p5(sketch);
