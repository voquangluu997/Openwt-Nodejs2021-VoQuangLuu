class IMovablePoint {
    constructor(x, y, xSpeed, ySpeed) {
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed ? xSpeed : 0;
        this.ySpeed = ySpeed ? ySpeed : 0;
    }
    moveUp() {
        this.y -= this.ySpeed;
    }
    moveDown() {
        this.y += this.ySpeed;
    }
    moveLeft() {
        this.x -= this.xSpeed;
    }
    moveRight() {
        this.x += this.xSpeed;
    }
    toString() {
        return `(${this.x},${this.y}) speed = (${this.xSpeed}, ${this.ySpeed})`;
    }
}
class IMovableCircle {
    constructor(x, y, xSpeed, ySpeed, radius) {
        this.center.setX(x);
        this.center.setY(y);
        this.center.setXSpeed(xSpeed);
        this.center.setYSpeed(ySpeed);
        this.radius = radius;
    }
    moveUp() {
        this.center.setY(this.center.getY() - this.center.getYSpeed());
    }
    moveDown() {
        this.center.setY(this.center.getY() + this.center.getYSpeed());
    }
    moveLeft() {
        this.center.setX(this.center.getX() - this.center.getXSpeed());
    }
    moveRight() {
        this.center.setX(this.center.getX() + this.center.getXSpeed());
    }
    toString() {
        return `(${this.center.getX()},${this.center.getY()}) speed = (${this.center.getXSpeed()},${this.center.getYSpeed()}), radius = ${this.radius}`;
    }
}
class MoveableRetangle {
    constructor(x1, y1, x2, y2, xSpeed, ySpeed) {
        this.topLeft.setX(x1);
        this.topLeft.setY(y1);
        this.bottomRight.setX(x1);
        this.bottomRight.setY(y1);
        this.topLeft.setSpeed(xSpeed, ySpeed);
        this.bottomRight.setSpeed(xSpeed, ySpeed);
    }
    toString() {
        return `MovavleRetangle[(${this.topLeft.getXY()}), ${this.bottomRight.getXY()}]`;
    }
    moveUp() {
        this.topLeft.setY(this.topLeft.getY() - this.topLeft.getYSpeed());
        this.bottomRight.setY(this.bottomRight.getY() - this.bottomRight.getYSpeed());
    }
    moveDown() {
        this.topLeft.setY(this.topLeft.getY() + this.topLeft.getYSpeed());
        this.bottomRight.setY(this.bottomRight.getY() + this.bottomRight.getYSpeed());
    }
    moveLeft() {
        this.topLeft.setX(this.topLeft.getX() - this.topLeft.getXSpeed());
        this.bottomRight.setX(this.bottomRight.getX() - this.bottomRight.getXSpeed());
    }
    moveRight() {
        this.topLeft.setX(this.topLeft.getX() + this.topLeft.getXSpeed());
        this.bottomRight.setX(this.bottomRight.getX() + this.bottomRight.getXSpeed());
    }
}
