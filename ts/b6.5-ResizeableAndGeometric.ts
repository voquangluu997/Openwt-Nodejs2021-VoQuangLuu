interface GeometricObject {
  getArea(): number;
  getPerimeter(): number;
}

class RCircle implements GeometricObject {
  protected radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  toString(): string {
    return `Circle[radius ] ${this.radius}`;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return Math.PI * 2 * this.radius;
  }
}

interface Resizeable {
  resize(percent: number): void;
}

class ResizeableCircle extends RCircle implements Resizeable {
  constructor(radius: number) {
    super(radius);
  }

  resize(percent: number) {
    this.radius *= percent / 100;
  }

  toString(): string {
    return `ResizeableCircle[circle [radius =  ${this.radius}]]`;
  }
}
