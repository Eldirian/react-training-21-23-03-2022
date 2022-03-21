class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`Punkt znajduje się w lokalizacji (${this.x}, ${this.y})`);
  }
}

// export default Point; // eksport domyślny
export { Point };
