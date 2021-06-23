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
