class AShape {
    constructor(color, filled) {
        this.color = "red";
        this.filled = true;
        this.color = color ? color : "red";
        this.filled = filled ? filled : true;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(f) {
        this.filled = f;
    }
    toString() {
        return `Shape[ color = ${this.color}, filled = ${this.filled}]`;
    }
}
class ACircle extends AShape {
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = 1;
        this.radius = radius ? radius : 1;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(r) {
        this.radius = r;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return "Circle[radius=" + this.radius + "]";
    }
}
class ARetangle extends AShape {
    constructor(width, length, color, filled) {
        super(color, filled);
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
        return `Retangle[width= ${this.width} length = ${this.length} color = ${this.getColor()}, filled = ${this.isFilled()}]`;
    }
}
class ASquare extends ARetangle {
    constructor(side, color, filled) {
        if (side && color && filled)
            super(side, side, color, filled);
        if (!color && !filled && side)
            super(side, side);
    }
    getSide() {
        return this.getwidth();
    }
    setSide(side) {
        this.setwidth(side);
        this.setlength(side);
    }
    setwidth(side) {
        this.setSide(side);
    }
    setlength(side) {
        this.setSide(side);
    }
    getPerimeter() {
        return (this.length + this.width) * 2;
    }
    toString() {
        return `Square[Retangle[Shape[color = ${this.getColor()} filled = ${this.isFilled()}], width = ${this.getwidth},length = ${this.getlength()}]]`;
    }
}
