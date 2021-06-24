class PolyLine {
  private points: MPoint[] = [];

  constructor(points?: MPoint[]) {
    this.points = points ? points : [];
  }

  appendPoint(x?: number, y?: number, point?: MPoint) {
    if (point) this.points.push(point);
    if (x && y) this.points.push(new MPoint(x, y));
  }

  toString(): string {
    return `{${this.points.reduce((acc, curr) => {
      return `(${curr.getX()}, ${curr.getY()}) `;
    }, "")}}`;
  }

  getLength(): number {
    return this.points.reduce((acc, curr) => {
      return acc + Math.abs(curr.getX() - curr.getY());
    }, 0);
  }
}
