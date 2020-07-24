// declare params.
float a = 0.9, b = -0.6013, c = 2, d = 0.5;

// declare initial values.
float x_0 = 0.01, y_0 = 0.02;

// update x.
float updateX(float prevX, float prevY) {
  return pow(prevX, 2) - pow(prevY, 2) + a * prevX + b * prevY;
}

// update y
float updateY(float prevX, float prevY) {
  return 2 * prevX * prevY + c * prevX + d * prevY;
}

void setup() {
  size(1280, 800);
  background(0);
  colorMode(RGB);
}

void draw() {
  translate(1280 / 2 + 60, 800 / 2 + 60);
  scale(160);
  strokeWeight(0.01);

  float x = x_0, y = y_0;

  color[] colorArr = {color(131, 58, 180), color(253, 29, 29), color(252, 176, 69)};

  int max = 5000;
  for (int i = 0; i < max; i++) {
    color c = colorArr[i % 3];
    stroke(c); //<>//
    point(x, y);
    float prevX = x;
    float prevY = y;
    x = updateX(prevX, prevY);
    y = updateY(prevX, prevY);
  }

  saveFrame("tinkerbell_map.png");
}
