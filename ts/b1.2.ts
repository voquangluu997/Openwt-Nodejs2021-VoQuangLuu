class Circle {
  private radius: number;
  constructor(r?: number) {
    this.radius = r ? r : 1;
  }

  getRadius(): number {
    return this.radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }
  toString(): string {
    return "Circle[radius=" + this.radius + "]";
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}
