class MyTriangle {
  private v1: MyPoint;
  private v2: MyPoint;
  private v3: MyPoint;

  constructor(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    x3: number,
    y3: number,
    v1?: MyPoint,
    v2?: MyPoint,
    v3?: MyPoint
  ) {
    if (v1 && v2 && v3) {
      this.v1 = v1;
      this.v2 = v2;
      this.v3 = v3;
    } else {
      this.v1.setX(x1);
      this.v1.setX(y1);
      this.v1.setX(x2);
      this.v1.setX(y2);
      this.v1.setX(x3);
      this.v1.setX(y3);
    }
  }

  toString(): string {
    return `Mytriangle[v1=(${this.v1.getX()},${this.v1.getY()},), v2=(${this.v2.getX()},${this.v2.getY()}), v3=(${this.v3.getX()},,${this.v3.getY()})]`;
  }

  getPerimeter(): number {
    return (
      this.v1.distance(this.v2) +
      this.v3.distance(this.v2) +
      this.v1.distance(this.v3)
    );
  }

  getType(): string {
    if (
      this.v1.distance(this.v2) == this.v1.distance(this.v3) &&
      this.v1.distance(this.v2) == this.v2.distance(this.v3)
    )
      return "Equilateral";

    if (
      this.v1.distance(this.v2) != this.v1.distance(this.v3) &&
      this.v1.distance(this.v2) != this.v2.distance(this.v3) &&
      this.v1.distance(this.v3) != this.v2.distance(this.v3)
    )
      return "Scalene";
    return "Isosceles";
  }
}
