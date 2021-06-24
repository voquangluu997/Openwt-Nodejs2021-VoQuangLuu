class PolyLine {
    constructor(points) {
        this.points = [];
        this.points = points ? points : [];
    }
    appendPoint(x, y, point) {
        if (point)
            this.points.push(point);
        if (x && y)
            this.points.push(new MPoint(x, y));
    }
    toString() {
        return `{${this.points.reduce((acc, curr) => {
            return `(${curr.getX()}, ${curr.getY()}) `;
        }, "")}}`;
    }
    getLength() {
        return this.points.reduce((acc, curr) => {
            return acc + Math.abs(curr.getX() - curr.getY());
        }, 0);
    }
}
