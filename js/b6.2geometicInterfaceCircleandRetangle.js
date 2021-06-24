class ICircle {
    constructor(radius) {
        this.radius = radius;
    }
    toString() {
        return `Circle[radius ] ${this.radius}`;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return Math.PI * 2 * this.radius;
    }
}
class IRetangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return (this.length + this.width) * 2;
    }
    toString() {
        return `Retangle[width= ${this.width} length = ${this.length}]`;
    }
}
