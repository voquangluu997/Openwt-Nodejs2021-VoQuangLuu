class Shape {
  private color: string = "red";
  private filled: boolean = true;

  constructor(color?: string, filled?: boolean) {
    this.color = color ? color : "red";
    this.filled = filled ? filled : true;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }
  isFilled(): boolean {
    return this.filled;
  }

  setFilled(f: boolean) {
    this.filled = f;
  }

  toString(): string {
    return `Shape[ color = ${this.color}, filled = ${this.filled}]`;
  }
}

class MCircle extends Shape {
  radius: number = 1;

  constructor(radius?: number, color?: string, filled?: boolean) {
    super(color, filled);
    this.radius = radius ? radius : 1;
  }

  getRadius(): number {
    return this.radius;
  }
  setRadius(r: number) {
    this.radius = r;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
  toString(): string {
    return "Circle[radius=" + this.radius + "]";
  }
}

class MRetangle extends Shape {
  width: number;
  length: number;

  constructor(
    width?: number,
    length?: number,
    color?: string,
    filled?: boolean
  ) {
    super(color, filled);
    this.width = width ? width : 1;
    this.length = length ? length : 1;
  }

  getwidth(): number {
    return this.width;
  }

  getlength(): number {
    return this.length;
  }

  setwidth(width: number) {
    this.width = width;
  }

  setlength(length: number) {
    this.length = length;
  }

  getArea(): number {
    return this.width * this.length;
  }

  getPerimeter(): number {
    return (this.length + this.width) * 2;
  }

  toString(): string {
    return `Retangle[width= ${this.width} length = ${
      this.length
    } color = ${this.getColor()}, filled = ${this.isFilled()}]`;
  }
}

class Square extends MRetangle {
  constructor(side?: number, color?: string, filled?: boolean) {
    if (side && color && filled) super(side, side, color, filled);
    if (!color && !filled && side) super(side, side);
  }

  getSide(): number {
    return this.getwidth();
  }

  setSide(side: number) {
    this.setwidth(side);
    this.setlength(side);
  }

  setwidth(side) {
    this.setSide(side);
  }

  setlength(side) {
    this.setSide(side);
  }

  getPerimeter(): number {
    return (this.length + this.width) * 2;
  }

  toString(): string {
    return `Square[Retangle[Shape[color = ${this.getColor()} filled = ${this.isFilled()}], width = ${
      this.getwidth
    },length = ${this.getlength()}]]`;
  }
}
