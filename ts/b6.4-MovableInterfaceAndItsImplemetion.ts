class MovableCircle implements Moveable {
  private radius: number;
  private center: MovablePoint;

  constructor(
    x: number,
    y: number,
    xSpeed: number,
    ySpeed: number,
    radius: number
  ) {
    this.center.setX(x);
    this.center.setY(y);
    this.center.setXSpeed(xSpeed);
    this.center.setYSpeed(ySpeed);
    this.radius = radius;
  }

  moveUp() {
    this.center.setY(this.center.getY() - this.center.getYSpeed());
  }
  moveDown() {
    this.center.setY(this.center.getY() + this.center.getYSpeed());
  }

  moveLeft() {
    this.center.setX(this.center.getX() - this.center.getXSpeed());
  }

  moveRight() {
    this.center.setX(this.center.getX() + this.center.getXSpeed());
  }

  toString(): string {
    return `(${this.center.getX()},${this.center.getY()}) speed = (${this.center.getXSpeed()},${this.center.getYSpeed()}), radius = ${
      this.radius
    }`;
  }
}
