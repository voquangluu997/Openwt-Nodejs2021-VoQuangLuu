class Cylinder extends Circle {
  private height: number;
  constructor(radius?: number, color?: string, height?: number) {
    super(radius, color);
    this.height = height ? height : 1;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(h: number) {
    this.height = this.height;
  }

  getVolume(): number {
    return this.getArea() * this.height;
  }
}
