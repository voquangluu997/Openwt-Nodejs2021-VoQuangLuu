interface Moveable {
  moveUp(): void;
  moveDown(): void;
  moveLeft(): void;
  moveRight(): void;
}

class IMovablePoint implements Moveable {
  private x: number;
  private y: number;
  private xSpeed: number = 0;
  private ySpeed: number = 0;

  constructor(x: number, y: number, xSpeed: number, ySpeed: number) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed ? xSpeed : 0;
    this.ySpeed = ySpeed ? ySpeed : 0;
  }

  moveUp() {
    this.y -= this.ySpeed;
  }
  moveDown() {
    this.y += this.ySpeed;
  }

  moveLeft() {
    this.x -= this.xSpeed;
  }

  moveRight() {
    this.x += this.xSpeed;
  }
  toString(): string {
    return `(${this.x},${this.y}) speed = (${this.xSpeed}, ${this.ySpeed})`;
  }
}

class IMovableCircle implements Moveable {
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

class MoveableRetangle implements Moveable {
  private topLeft: MovablePoint;
  private bottomRight: MovablePoint;
  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xSpeed: number,
    ySpeed: number
  ) {
    this.topLeft.setX(x1);
    this.topLeft.setY(y1);
    this.bottomRight.setX(x1);
    this.bottomRight.setY(y1);
    this.topLeft.setSpeed(xSpeed, ySpeed);
    this.bottomRight.setSpeed(xSpeed, ySpeed);
  }

  toString(): string {
    return `MovavleRetangle[(${this.topLeft.getXY()}), ${this.bottomRight.getXY()}]`;
  }

  moveUp() {
    this.topLeft.setY(this.topLeft.getY() - this.topLeft.getYSpeed());
    this.bottomRight.setY(
      this.bottomRight.getY() - this.bottomRight.getYSpeed()
    );
  }
  moveDown() {
    this.topLeft.setY(this.topLeft.getY() + this.topLeft.getYSpeed());
    this.bottomRight.setY(
      this.bottomRight.getY() + this.bottomRight.getYSpeed()
    );
  }

  moveLeft() {
    this.topLeft.setX(this.topLeft.getX() - this.topLeft.getXSpeed());
    this.bottomRight.setX(
      this.bottomRight.getX() - this.bottomRight.getXSpeed()
    );
  }

  moveRight() {
    this.topLeft.setX(this.topLeft.getX() + this.topLeft.getXSpeed());
    this.bottomRight.setX(
      this.bottomRight.getX() + this.bottomRight.getXSpeed()
    );
  }
}
