class Point2D {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x ? x : 0;
        this.y = y ? y : 0;
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
class Point3D extends Point2D {
    constructor(x, y, z) {
        super(x, y);
        this.z = 0;
        this.z = z ? z : 0;
    }
    getZ() {
        return this.z;
    }
    setZ(z) {
        this.z = z;
    }
    getXYZ() {
        return [...this.getXY(), this.z];
    }
    setXYZ(x, y, z) {
        this.setX(x);
        this.setY(y);
        this.z = z;
    }
    toString() {
        return `{${this.getX()},${this.getY()}, ${this.z}}`;
    }
}
