class Cylinder extends Circle {
    constructor(radius, color, height) {
        super(radius, color);
        this.height = height ? height : 1;
    }
    getHeight() {
        return this.height;
    }
    setHeight(h) {
        this.height = this.height;
    }
    getVolume() {
        return this.getArea() * this.height;
    }
}
