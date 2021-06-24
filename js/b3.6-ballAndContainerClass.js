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
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + width - 1;
        this.y2 = y + height - 1;
    }
    getX() {
        return this.x1;
    }
    getY() {
        return this.y1;
    }
    getWidth() {
        return this.x2 - this.x1 + 1;
    }
    getHeight() {
        return this.y2 - this.y1 + 1;
    }
    collides(ball) {
        if (ball.getX() - ball.getRadius() <= this.x1 ||
            ball.getX() - ball.getRadius() >= this.x2) {
            ball.reflectHorizontal();
            return true;
        }
        if (ball.getY() - ball.getRadius() <= this.y1 ||
            ball.getY() - ball.getRadius() >= this.y2) {
            ball.reflectVertical();
            return true;
        }
    }
    toString() {
        return (`Container[(${this.x1},${this.y1}),(${this.x2},${this.y2})]`);
    }
}
