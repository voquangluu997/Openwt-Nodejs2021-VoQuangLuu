class MyTriangle {
    constructor(x1, x2, y1, y2, x3, y3, v1, v2, v3) {
        if (v1 && v2 && v3) {
            this.v1 = v1;
            this.v2 = v2;
            this.v3 = v3;
        }
        else {
            this.v1.setX(x1);
            this.v1.setX(y1);
            this.v1.setX(x2);
            this.v1.setX(y2);
            this.v1.setX(x3);
            this.v1.setX(y3);
        }
    }
    toString() {
        return `Mytriangle[v1=(${this.v1.getX()},${this.v1.getY()},), v2=(${this.v2.getX()},${this.v2.getY()}), v3=(${this.v3.getX()},,${this.v3.getY()})]`;
    }
    getPerimeter() {
        return (this.v1.distance(this.v2) +
            this.v3.distance(this.v2) +
            this.v1.distance(this.v3));
    }
    getType() {
        if (this.v1.distance(this.v2) == this.v1.distance(this.v3) &&
            this.v1.distance(this.v2) == this.v2.distance(this.v3))
            return "Equilateral";
        if (this.v1.distance(this.v2) != this.v1.distance(this.v3) &&
            this.v1.distance(this.v2) != this.v2.distance(this.v3) &&
            this.v1.distance(this.v3) != this.v2.distance(this.v3))
            return "Scalene";
        return "Isosceles";
    }
}
