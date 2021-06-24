class Retangle {
  private width: number;
  private length: number;

  constructor(width?: number, length?: number) {
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
    return "Retangle[width=" + this.width + " length =" + this.length + "]";
  }
}

//   let Retangle: Retangle = new Retangle();

//   console.log(circle.getArea());
//   console.log(circle.getwidth());
