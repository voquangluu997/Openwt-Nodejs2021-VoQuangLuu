class Ball {
  private x: number;
  private y: number;
  private radius: number;
  private xDelta: number;
  private yDelta: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    xDelta: number,
    yDelta: number
  ) {
    this.x = x;
    this.y = y;
    this.xDelta = xDelta;
    this.yDelta = yDelta;
    this.radius = radius;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getXDelta(): number {
    return this.xDelta;
  }
  getYDelta(): number {
    return this.yDelta;
  }
  getRadius(): number {
    return this.radius;
  }

  setX(X: number) {
    this.x = X;
  }

  setY(Y: number) {
    this.y = Y;
  }

  setXDelta(xDelta: number) {
    this.xDelta = xDelta;
  }

  setYDelta(yDelta: number) {
    this.yDelta = yDelta;
  }
  setRadius(radius: number) {
    this.radius = radius;
  }

  move(): void {
    this.x += this.xDelta;
    this.y += this.yDelta;
  }
  reflectVertical(): void {
    this.xDelta = -this.xDelta;
  }

  reflectHorizontal(): void {
    this.yDelta = -this.yDelta;
  }

  toString(): string {
    return (
      "Ball[x=" +
      this.getX() +
      " y=" +
      this.getY() +
      " speed = (" +
      this.xDelta +
      ", " +
      this.yDelta +
      ")" +
      "]"
    );
  }
}
