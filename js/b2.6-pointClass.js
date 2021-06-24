class MyPoint {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getXY() {
        return [this.x, this.y];
    }
    setXY(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(another, x, y) {
        if (another)
            return Math.sqrt(Math.pow(another.getX() - this.x, 2) -
                Math.pow(another.getY() - this.y, 2));
        else
            return Math.sqrt(Math.pow(this.x - x, 2) - Math.pow(this.y - y, 2));
    }
    toString() {
        return ` number(${this.x} ${this.y})`;
    }
}
