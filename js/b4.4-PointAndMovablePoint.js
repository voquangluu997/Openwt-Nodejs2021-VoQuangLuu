class MovablePoint extends Point2D {
    constructor(x, y, xSpeed, ySpeed) {
        super(x, y);
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.xSpeed = xSpeed ? xSpeed : 0;
        this.ySpeed = ySpeed ? ySpeed : 0;
    }
    getXSpeed() {
        return this.xSpeed;
    }
    getYSpeed() {
        return this.ySpeed;
    }
    setXSpeed(xSpeed) {
        this.xSpeed = xSpeed;
    }
    setYSpeed(ySpeed) {
        this.ySpeed = ySpeed;
    }
    getSpeed() {
        return [this.xSpeed, this.ySpeed];
    }
    setSpeed(xSpeed, ySpeed) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    toString() {
        return `(${this.getX()}, ${this.getY()}), speed = (${this.xSpeed},${this.ySpeed})`;
    }
    move() {
        this.setX(this.getX() + this.xSpeed);
        this.setY(this.getY() + this.ySpeed);
        return new MovablePoint(this.getX(), this.getY(), this.xSpeed, this.ySpeed);
    }
}
