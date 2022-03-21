import { Point } from './Point';

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

export { Point3D };
