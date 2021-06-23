class MyPoint {
  private x: number = 0;
  private y: number = 0;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }

  getXY(): number[] {
    return [this.x, this.y];
  }
  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // distance(x?: number, y?: number, another?: MyPoint): number {
  //   return (another && !x && !y)
  //     ? Math.sqrt(
  //         Math.pow(another.getX() - this.x, 2) - Math.pow(another.getY() - this.y, 2)
  //       )
  //     : Math.sqrt(Math.pow(this.x - x, 2) - Math.pow(this.y - y, 2));
  // }
  distance(another?: MyPoint, x?: number, y?: number): number {
    if (another)
      return Math.sqrt(
        Math.pow(another.getX() - this.x, 2) -
          Math.pow(another.getY() - this.y, 2)
      );
    else return Math.sqrt(Math.pow(this.x - x, 2) - Math.pow(this.y - y, 2));
  }
  toString(): string {
    return ` number(${this.x} ${this.y})`;
  }
}
