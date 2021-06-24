class MyCircle {
  private radius: number = 1;
  private center: MyPoint = new MyPoint(0, 0);

  constructor(r?: number, x?: number, y?: number, center?: MyPoint) {
    if (center) this.center = center;
    else {
      if (r && x && y) {
        this.radius = r;
        this.center.setX(x);
        this.center.setY(y);
      }
    }
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  getCenter(): MyPoint {
    return this.center;
  }

  setCenter(center: MyPoint) {
    this.center = center;
  }

  getCenterX(): number {
    return this.center.getX();
  }
  setCenterX(x: number) {
    this.center.setX(x);
  }

  getCenterY(): number {
    return this.center.getY();
  }

  setCenterY(y: number) {
    this.center.setY(y);
  }

  getCenterXY(): number[] {
    return [this.center.getX(), this.center.getY()];
  }

  setcenterXY(x: number, y: number) {
    this.center.setX(x);
    this.center.setY(y);
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }

  distance(another: MyCircle) {
    return another.getCenter().distance(this.center);
  }
}
