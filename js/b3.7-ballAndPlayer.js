class PBall {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getZ() {
        return this.z;
    }
    setXYZ(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    toString() {
        return `(${this.x},${this.y},${this.z})`;
    }
}
class Player {
    constructor(x, y, z, number) {
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    move(xDiff, yDiff) {
        this.x += xDiff;
        this.y += yDiff;
    }
    jump(zDiff) {
        this.z += zDiff;
    }
    near(ball) {
        return (Math.sqrt(Math.pow(ball.getX() - this.x, 2) - Math.pow(ball.getY() - this.y, 2)) < 8);
    }
    kick(ball, xDiff, yDiff, zDiff) {
        ball.setXYZ(ball.getX() + xDiff, ball.getY() + yDiff, ball.getZ() + zDiff);
    }
}
