class Circle {
    constructor(r, c) {
        this.radius = r ? r : 1;
        this.color = c ? c : "red";
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getColor() {
        return this.color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    setColor(color) {
        this.color = color;
    }
}
let circle = new Circle();
console.log(circle.getArea());
console.log(circle.getRadius());
