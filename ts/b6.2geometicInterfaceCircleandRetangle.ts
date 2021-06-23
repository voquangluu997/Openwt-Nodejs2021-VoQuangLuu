interface GeometricObject {
  getArea(): number;
  getPerimeter(): number;
}

class ICircle implements GeometricObject {
  private radius: number;
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

class IRetangle implements GeometricObject {
  width: number;
  length: number;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  getArea(): number {
    return this.width * this.length;
  }

  getPerimeter(): number {
    return (this.length + this.width) * 2;
  }

  toString(): string {
    return `Retangle[width= ${this.width} length = ${this.length}]`;
  }
}
