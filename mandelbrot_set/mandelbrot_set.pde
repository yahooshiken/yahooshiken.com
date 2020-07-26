void setup() {
  size(1280, 800);
  background(255);
}

void draw() {
  float w = 6, h = (w * height) / width;
  float xMin = - w / 2, yMin = - h / 2;
  loadPixels();

  int maxIterations = 100;
  float xMax = xMin + w, yMax = yMin + h;

  float dx = (xMax - xMin) / width, dy = (yMax - yMin) / height;

  float y = yMin;
  for (int j = 0; j < height; j++) {
    float x = xMin;
    for (int i = 0; i < width; i++) {
      float a = x, b = y;
      int n = 0;
      float max = 4;
      float absOld = 0;
      float convergeNumber = maxIterations;

      while (n < maxIterations) {
        float aa = pow(a, 2), bb = pow(b, 2);
        float abs = sqrt(aa + bb);
        if (abs > max) {
          float diffToLast = abs - absOld;
          float diffToMax = max - absOld;
          convergeNumber = n + diffToMax / diffToLast;
          break;
        }

        float twoab = 2 * a * b;
        a = aa - bb + x;
        b = twoab + y;
        n++;
        absOld = abs;
      }

      if (n == maxIterations) {
        pixels[i + j * width] = color(0);
      } else {
        float norm = map(convergeNumber, 0, maxIterations, 0, 1);
        pixels[i + j * width] = color(map(sqrt(norm), 0, 1, 0, 255));
      }
      x += dx;
    }
    y +=  dy;
  }
  updatePixels();
  saveFrame("mandelbrot_set.png");
}
