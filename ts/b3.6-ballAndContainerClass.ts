class MyBall {
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

class Container {
  private x1: number;
  private y1: number;
  private x2: number;
  private y2: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + width - 1;
    this.y2 = y + height - 1;
  }

  getX(): number {
    return this.x1;
  }

  getY(): number {
    return this.y1;
  }

  getWidth(): number {
    return this.x2 - this.x1 + 1;
  }
  getHeight(): number {
    return this.y2 - this.y1 + 1;
  }
  collides(ball: Ball): boolean {
    if (
      ball.getX() - ball.getRadius() <= this.x1 ||
      ball.getX() - ball.getRadius() >= this.x2
    ) {
      ball.reflectHorizontal();
      return true;
    }

    if (
      ball.getY() - ball.getRadius() <= this.y1 ||
      ball.getY() - ball.getRadius() >= this.y2
    ) {
      ball.reflectVertical();
      return true;
    }
  }


  toString(): string {
    return (
      `Container[(${this.x1},${this.y1}),(${this.x2},${this.y2})]`
    );
  }
}
