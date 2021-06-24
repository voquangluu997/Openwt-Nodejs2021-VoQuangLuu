class MovablePoint extends Point2D {
  private xSpeed: number = 0;
  private ySpeed: number = 0;

  constructor(x?: number, y?: number, xSpeed?: number, ySpeed?: number) {
    super(x, y);
    this.xSpeed = xSpeed ? xSpeed : 0;
    this.ySpeed = ySpeed ? ySpeed : 0;
  }

  getXSpeed(): number {
    return this.xSpeed;
  }

  getYSpeed(): number {
    return this.ySpeed;
  }
  setXSpeed(xSpeed: number) {
    this.xSpeed = xSpeed;
  }

  setYSpeed(ySpeed: number) {
    this.ySpeed = ySpeed;
  }

  getSpeed(): number[] {
    return [this.xSpeed, this.ySpeed];
  }

  setSpeed(xSpeed: number, ySpeed: number) {
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  toString(): string {
    return `(${this.getX()}, ${this.getY()}), speed = (${this.xSpeed},${
      this.ySpeed
    })`;
  }

  move(): MovablePoint {
    this.setX(this.getX() + this.xSpeed);
    this.setY(this.getY() + this.ySpeed);
    return new MovablePoint(this.getX(), this.getY(), this.xSpeed, this.ySpeed);
  }
  
}
