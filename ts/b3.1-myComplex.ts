class MyComplex {
  private real: number = 0;
  private imag: number = 0;

  constructor(real?: number, imag?: number) {
    this.real = real ? real : 0;
    this.imag = imag ? imag : 0;
  }

  getReal(): number {
    return this.real;
  }
  setReal(real: number) {
    this.real = real;
  }

  getImag(): number {
    return this.imag;
  }
  setImag(imag: number) {
    this.imag = imag;
  }

  setValue(real: number, imag: number) {
    this.imag = imag;
    this.real = real;
  }

  toString(): string {
    return `   ${this.real} + ${this.imag}i`;
  }

  isReal(): boolean {
    return this.imag == 0;
  }

  isImaginary(): boolean {
    return this.real == 0;
  }

  equals(real?: number, imag?: number, another?: MyComplex): boolean {
    if (!another) return this.real == real && this.imag == imag;
    return this.real == another.real && this.imag == another.imag;
  }

  manitute(real: number, imag: number): number {
    return Math.sqrt(real * real + imag * imag);
  }

  addInto(right: MyComplex): MyComplex {
    return new MyComplex(right.real + this.real, right.imag + this.imag);
  }
}
