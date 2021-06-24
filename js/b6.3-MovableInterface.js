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
