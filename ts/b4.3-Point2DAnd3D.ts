class Point2D {
  private x: number = 0;
  private y: number = 0;

  constructor(x?: number, y?: number) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
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

class Point3D extends Point2D {
  private z: number = 0;

  constructor(x?: number, y?: number, z?: number) {
    super(x, y);
    this.z = z ? z : 0;
  }
  getZ(): number {
    return this.z;
  }

  setZ(z: number) {
    this.z = z;
  }

  getXYZ(): number[] {
    return [...this.getXY(), this.z];
  }
  setXYZ(x: number, y: number, z: number) {
    this.setX(x);
    this.setY(y);
    this.z = z;
  }

  toString(): string {
    return `{${this.getX()},${this.getY()}, ${this.z}}`;
  }
}
