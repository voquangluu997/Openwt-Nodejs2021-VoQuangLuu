class MPoint {
    constructor(x, y) {
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
class MLine {
    constructor(begin, end) {
        this.begin = begin;
        this.end = end;
    }
    getBegin() {
        return this.begin;
    }
    getEnd() {
        return this.end;
    }
    setBegin(begin) {
        this.begin = begin;
    }
    setEnd(end) {
        this.end = end;
    }
    getBeginX() {
        return this.begin.getX();
    }
    setBeginX(x) {
        this.begin.setX(x);
    }
    getBeginY() {
        return this.begin.getY();
    }
    setBeginY(y) {
        this.begin.setY(y);
    }
    getEndX() {
        return this.end.getX();
    }
    setEndX(x) {
        this.end.setX(x);
    }
    getEndY() {
        return this.end.getY();
    }
    setEndY(y) {
        this.end.setY(y);
    }
    getBeginXY() {
        return [this.begin.getX(), this.begin.getY()];
    }
    getEndXY() {
        return [this.end.getX(), this.end.getY()];
    }
    setBeginXY(x, y) {
        this.begin.setX(x);
        this.begin.setY(y);
    }
    setEndXY(x, y) {
        this.end.setX(x);
        this.end.setY(y);
    }
    getlength() {
        return this.begin.distance(this.end);
    }
    getGradient() {
        return Math.atan2(this.end.getY() - this.begin.getY(), this.end.getX() - this.begin.getX());
    }
    toString() {
        return ` Myline(begin=(${this.begin.getX()},${this.begin.getY()}), end=(${this.end.getX()},${this.end.getY()})]`;
    }
}
class LineSub extends MPoint {
    constructor(beginX, beginY, endX, endY, begin, end) {
        if (endX && endY) {
            super(begin.getX(), begin.getY());
        }
        else {
            super(beginX, beginY);
            this.end = new MPoint(endX, endY);
        }
    }
    getBegin() {
        return this.getBegin();
    }
    getEnd() {
        return this.end;
    }
    setBegin(begin) {
        this.setBegin(begin);
    }
    setEnd(end) {
        this.end = end;
    }
    getBeginX() {
        return this.getBeginX();
    }
    setBeginX(x) {
        this.setBeginX(x);
    }
    getBeginY() {
        return this.getBeginY();
    }
    setBeginY(y) {
        this.setBeginY(y);
    }
    getEndX() {
        return this.end.getX();
    }
    setEndX(x) {
        this.end.setX(x);
    }
    getEndY() {
        return this.end.getY();
    }
    setEndY(y) {
        this.end.setY(y);
    }
    getBeginXY() {
        return [this.getBeginX(), this.getBeginY()];
    }
    getEndXY() {
        return [this.end.getX(), this.end.getY()];
    }
    setBeginXY(x, y) {
        this.setBeginX(x);
        this.setBeginY(y);
    }
    setEndXY(x, y) {
        this.end.setX(x);
        this.end.setY(y);
    }
    getlength() {
        return this.getBegin().distance(this.end);
    }
    getGradient() {
        return Math.atan2(this.end.getY() - this.getBeginY(), this.end.getX() - this.getBeginX());
    }
    toString() {
        return ` Myline(begin=(${this.getBeginX()},${this.getBeginY()}), end=(${this.end.getX()},${this.end.getY()})]`;
    }
}
