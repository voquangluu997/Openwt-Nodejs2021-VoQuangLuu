class MyLine {
  private begin: MyPoint;
  private end: MyPoint;

  constructor(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    begin?: MyPoint,
    end?: MyPoint
  ) {
    if (begin && end) {
      this.begin = begin;
      this.end = end;
    } else {
      this.begin = new MyPoint(x1, y1);
      this.end = new MyPoint(x2, y2);
    }
  }

  getBegin(): MyPoint {
    return this.begin;
  }

  getEnd(): MyPoint {
    return this.end;
  }
  setBegin(begin: MyPoint) {
    this.begin = begin;
  }

  setEnd(end: MyPoint) {
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
    // return this.begin.distance(null, this.end.getX(), this.end.getY());
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
