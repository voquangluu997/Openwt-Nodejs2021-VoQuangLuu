class MyComplex {
    constructor(real, imag) {
        this.real = 0;
        this.imag = 0;
        this.real = real ? real : 0;
        this.imag = imag ? imag : 0;
    }
    getReal() {
        return this.real;
    }
    setReal(real) {
        this.real = real;
    }
    getImag() {
        return this.imag;
    }
    setImag(imag) {
        this.imag = imag;
    }
    setValue(real, imag) {
        this.imag = imag;
        this.real = real;
    }
    toString() {
        return `   ${this.real} + ${this.imag}i`;
    }
    isReal() {
        return this.imag == 0;
    }
    isImaginary() {
        return this.real == 0;
    }
    equals(real, imag, another) {
        if (!another)
            return this.real == real && this.imag == imag;
        return this.real == another.real && this.imag == another.imag;
    }
    manitute(real, imag) {
        return Math.sqrt(real * real + imag * imag);
    }
    addInto(right) {
        return new MyComplex(right.real + this.real, right.imag + this.imag);
    }
}
