class MyBall {
    constructor(x, y, radius, xDelta, yDelta) {
        this.x = x;
        this.y = y;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.radius = radius;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getXDelta() {
        return this.xDelta;
    }
    getYDelta() {
        return this.yDelta;
    }
    getRadius() {
        return this.radius;
    }
    setX(X) {
        this.x = X;
    }
    setY(Y) {
        this.y = Y;
    }
    setXDelta(xDelta) {
        this.xDelta = xDelta;
    }
    setYDelta(yDelta) {
        this.yDelta = yDelta;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    move() {
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
    reflectVertical() {
        this.xDelta = -this.xDelta;
    }
    reflectHorizontal() {
        this.yDelta = -this.yDelta;
    }
    toString() {
        return ("Ball[x=" +
            this.getX() +
            " y=" +
            this.getY() +
            " speed = (" +
            this.xDelta +
            ", " +
            this.yDelta +
            ")" +
            "]");
    }
}
class Container {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.radius = radius;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getXDelta() {
        return this.xDelta;
    }
    getYDelta() {
        return this.yDelta;
    }
    getRadius() {
        return this.radius;
    }
    setX(X) {
        this.x = X;
    }
    setY(Y) {
        this.y = Y;
    }
    setXDelta(xDelta) {
        this.xDelta = xDelta;
    }
    setYDelta(yDelta) {
        this.yDelta = yDelta;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    move() {
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
    reflectVertical() {
        this.xDelta = -this.xDelta;
    }
    reflectHorizontal() {
        this.yDelta = -this.yDelta;
    }
    toString() {
        return ("Ball[x=" +
            this.getX() +
            " y=" +
            this.getY() +
            " speed = (" +
            this.xDelta +
            ", " +
            this.yDelta +
            ")" +
            "]");
    }
}
