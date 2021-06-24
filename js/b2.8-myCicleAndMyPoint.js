class MyCircle {
    constructor(r, x, y, center) {
        this.radius = 1;
        this.center = new MyPoint(0, 0);
        if (center)
            this.center = center;
        else {
            if (r && x && y) {
                this.radius = r;
                this.center.setX(x);
                this.center.setY(y);
            }
        }
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getCenter() {
        return this.center;
    }
    setCenter(center) {
        this.center = center;
    }
    getCenterX() {
        return this.center.getX();
    }
    setCenterX(x) {
        this.center.setX(x);
    }
    getCenterY() {
        return this.center.getY();
    }
    setCenterY(y) {
        this.center.setY(y);
    }
    getCenterXY() {
        return [this.center.getX(), this.center.getY()];
    }
    setcenterXY(x, y) {
        this.center.setX(x);
        this.center.setY(y);
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    distance(another) {
        return another.getCenter().distance(this.center);
    }
}
