class RCircle {
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
class ResizeableCircle extends RCircle {
    constructor(radius) {
        super(radius);
    }
    resize(percent) {
        this.radius *= percent / 100;
    }
    toString() {
        return `ResizeableCircle[circle [radius =  ${this.radius}]]`;
    }
}
