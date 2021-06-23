class Circle {
  private radius: number;
  private color: string;

  constructor(r?: number, c?: string) {
    this.radius = r ? r : 1;
    this.color = c ? c : "red";
  }

  getRadius(): number {
    return this.radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
  getColor(): string {
    return this.color;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  setColor(color: string) {
    this.color = color;
  }
  toString(): string {
    return "Circle[radius=" + this.radius + " color=" + this.color + "]";
  }
}

let circle: Circle = new Circle();

console.log(circle.getArea());
console.log(circle.getRadius());
