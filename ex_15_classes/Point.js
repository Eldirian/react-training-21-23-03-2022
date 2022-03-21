class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`Punkt znajduje się w lokalizacji (${this.x}, ${this.y})`);
  }
}

const point1 = new Point(10, 20);
point1.draw();

class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  draw() {
    console.log(
      `Punkt znajduje się w lokalizacji (${this.x}, ${this.y}, ${this.z})`
    );
  }
}

const point3d = new Point3D(10, 20, 30);
point3d.draw();
