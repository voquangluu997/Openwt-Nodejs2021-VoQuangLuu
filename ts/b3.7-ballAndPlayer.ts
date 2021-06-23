class PBall {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
  getZ(): number {
    return this.z;
  }

  setXYZ(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString(): string {
    return `(${this.x},${this.y},${this.z})`;
  }
}

class Player {
  private x: number;
  private y: number;
  private z: number = 0;
  private number: number;
  constructor(x: number, y: number, z: number, number: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  move(xDiff: number, yDiff: number): void {
    this.x += xDiff;
    this.y += yDiff;
  }
  jump(zDiff: number): void {
    this.z += zDiff;
  }
  near(ball: PBall): boolean {
    return (
      Math.sqrt(
        Math.pow(ball.getX() - this.x, 2) - Math.pow(ball.getY() - this.y, 2)
      ) < 8
    );
  }

  kick(ball: PBall, xDiff: number, yDiff: number, zDiff: number): void {
    ball.setXYZ(ball.getX() + xDiff, ball.getY() + yDiff, ball.getZ() + zDiff);
  }
}
