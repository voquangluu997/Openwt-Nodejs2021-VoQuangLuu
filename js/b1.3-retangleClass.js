class Retangle {
    constructor(width, length) {
        this.width = width ? width : 1;
        this.length = length ? length : 1;
    }
    getwidth() {
        return this.width;
    }
    getlength() {
        return this.length;
    }
    setwidth(width) {
        this.width = width;
    }
    setlength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return (this.length + this.width) * 2;
    }
    toString() {
        return "Retangle[width=" + this.width + " length =" + this.length + "]";
    }
}
//   let Retangle: Retangle = new Retangle();
//   console.log(circle.getArea());
//   console.log(circle.getwidth());
