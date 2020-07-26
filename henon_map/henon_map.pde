// declare params.
float a = 1.4, b = 0.3;

// declare initial values.
float x_0 = 0, y_0 = 0;

// update x.
float updateX(float prevX, float prevY) {
  return 1 + prevY - a * pow(prevX, 2);
}

// update y
float updateY(float prevX, float prevY) {
  return b * prevX;
}

void setup() {
  size(1280, 800);
  background(0);
  colorMode(RGB);
}

void draw() {
  translate(1280 / 2 + 60, 800 / 2 + 60);
  scale(160, 480);
  strokeWeight(0.005);

  float x = x_0, y = y_0;

  color startColor = color(253, 252, 71), endColor = color(36, 254, 65);

  int max = 1000;
  for (int i = 0; i < max; i++) {
    float rate = i / max;
    color c = lerpColor(startColor, endColor, float(i) / max);

    stroke(c);
    point(x, y);
    float prevX = x;
    float prevY = y;
    x = updateX(prevX, prevY);
    y = updateY(prevX, prevY);
  }

  saveFrame("henon_map.png");
}
