class MPoint {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
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

  distance(another?: MPoint, x?: number, y?: number): number {
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
class MLine {
  private begin: MPoint;
  private end: MPoint;

  constructor(begin: MPoint, end: MPoint) {
    this.begin = begin;
    this.end = end;
  }

  getBegin(): MPoint {
    return this.begin;
  }

  getEnd(): MPoint {
    return this.end;
  }
  setBegin(begin: MPoint) {
    this.begin = begin;
  }

  setEnd(end: MPoint) {
    this.end = end;
  }

  getBeginX(): number {
    return this.begin.getX();
  }
  setBeginX(x: number) {
    this.begin.setX(x);
  }

  getBeginY(): number {
    return this.begin.getY();
  }

  setBeginY(y: number) {
    this.begin.setY(y);
  }

  getEndX(): number {
    return this.end.getX();
  }
  setEndX(x: number) {
    this.end.setX(x);
  }

  getEndY(): number {
    return this.end.getY();
  }

  setEndY(y: number) {
    this.end.setY(y);
  }

  getBeginXY(): number[] {
    return [this.begin.getX(), this.begin.getY()];
  }

  getEndXY(): number[] {
    return [this.end.getX(), this.end.getY()];
  }

  setBeginXY(x: number, y: number) {
    this.begin.setX(x);
    this.begin.setY(y);
  }

  setEndXY(x: number, y: number) {
    this.end.setX(x);
    this.end.setY(y);
  }

  getlength(): number {
    return this.begin.distance(this.end);
  }

  getGradient(): number {
    return Math.atan2(
      this.end.getY() - this.begin.getY(),
      this.end.getX() - this.begin.getX()
    );
  }
  toString(): string {
    return ` Myline(begin=(${this.begin.getX()},${this.begin.getY()}), end=(${this.end.getX()},${this.end.getY()})]`;
  }
}

class LineSub extends MPoint {
  private end: MPoint;

  constructor(
    beginX?: number,
    beginY?: number,
    endX?: number,
    endY?: number,
    begin?: MPoint,
    end?: MPoint
  ) {
    if (endX && endY) {
      super(begin.getX(), begin.getY());
    } else {
      super(beginX, beginY);
      this.end = new MPoint(endX, endY);
    }
  }

  getBegin(): MPoint {
    return this.getBegin();
  }

  getEnd(): MPoint {
    return this.end;
  }
  setBegin(begin: MPoint) {
    this.setBegin(begin);
  }

  setEnd(end: MPoint) {
    this.end = end;
  }

  getBeginX(): number {
    return this.getBeginX();
  }
  setBeginX(x: number) {
    this.setBeginX(x);
  }

  getBeginY(): number {
    return this.getBeginY();
  }

  setBeginY(y: number) {
    this.setBeginY(y);
  }

  getEndX(): number {
    return this.end.getX();
  }
  setEndX(x: number) {
    this.end.setX(x);
  }

  getEndY(): number {
    return this.end.getY();
  }

  setEndY(y: number) {
    this.end.setY(y);
  }

  getBeginXY(): number[] {
    return [this.getBeginX(), this.getBeginY()];
  }

  getEndXY(): number[] {
    return [this.end.getX(), this.end.getY()];
  }

  setBeginXY(x: number, y: number) {
    this.setBeginX(x);
    this.setBeginY(y);
  }

  setEndXY(x: number, y: number) {
    this.end.setX(x);
    this.end.setY(y);
  }

  getlength(): number {
    return this.getBegin().distance(this.end);
  }

  getGradient(): number {
    return Math.atan2(
      this.end.getY() - this.getBeginY(),
      this.end.getX() - this.getBeginX()
    );
  }
  toString(): string {
    return ` Myline(begin=(${this.getBeginX()},${this.getBeginY()}), end=(${this.end.getX()},${this.end.getY()})]`;
  }
}
