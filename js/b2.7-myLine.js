class MyLine {
    constructor(x1, x2, y1, y2, begin, end) {
        if (begin && end) {
            this.begin = begin;
            this.end = end;
        }
        else {
            this.begin = new MyPoint(x1, y1);
            this.end = new MyPoint(x2, y2);
        }
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
        // return this.begin.distance(null, this.end.getX(), this.end.getY());
        return this.begin.distance(this.end);
    }
    getGradient() {
        return Math.atan2(this.end.getY() - this.begin.getY(), this.end.getX() - this.begin.getX());
    }
    toString() {
        return ` Myline(begin=(${this.begin.getX()},${this.begin.getY()}), end=(${this.end.getX()},${this.end.getY()})]`;
    }
}
