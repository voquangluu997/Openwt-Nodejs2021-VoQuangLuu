class Circle {
    constructor(r) {
        this.radius = r ? r : 1;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    toString() {
        return "Circle[radius=" + this.radius + "]";
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
