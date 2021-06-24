class MyPolynomial {
    constructor(coeffs) {
        this.coeffs = coeffs;
    }
    getDegree() {
        return this.coeffs.length;
    }
    evaluate(x) {
        let sum = 0;
        for (let i = this.coeffs.length - 1; i >= 0; i--) {
            sum += Math.pow(this.coeffs[i], i);
        }
        return sum;
    }
    add(right) {
        let rs = new MyPolynomial([]);
        for (let i = 0; i < Math.max(right.coeffs.length, this.coeffs.length); i++) {
            if (i < Math.min(right.coeffs.length, this.coeffs.length))
                rs.coeffs[i] = right.coeffs[i] + this.coeffs[i];
            else {
                rs.coeffs[i] =
                    right.coeffs.length > this.coeffs.length
                        ? right.coeffs[i]
                        : this.coeffs[i];
            }
        }
        return rs;
    }
    multiply(right) {
        let rs = new MyPolynomial([]);
        for (let i = 0; i < right.coeffs.length; i++)
            for (let j = 0; j < this.coeffs.length; j++) {
                rs.coeffs[i * j] = right.coeffs[i] * this.coeffs[j];
            }
        for (let i = 0; i < rs.coeffs.length; i++) {
            if (!rs.coeffs[i])
                rs.coeffs[i] = 0;
        }
        return rs;
    }
}
