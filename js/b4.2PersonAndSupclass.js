class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(ad) {
        this.address = ad;
    }
    toString() {
        return `Person[ name = ${this.name}, address= ${this.address}]`;
    }
}
class Student extends Person {
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    getProgram() {
        return this.program;
    }
    getYear() {
        return this.year;
    }
    getFee() {
        return this.fee;
    }
    setProgram(program) {
        this.program = program;
    }
    setYear(year) {
        this.year = year;
    }
    setFee(fee) {
        this.fee = fee;
    }
    toString() {
        return `Student[Person[name = ${this.getName()}, address =${this.getAddress()},] program =${this.program}, year= ${this.year}, fee = ${this.fee}]`;
    }
}
class Staff extends Person {
    constructor(name, address, school, pay) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    getSchool() {
        return this.school;
    }
    getPay() {
        return this.pay;
    }
    setSchool(school) {
        this.school = school;
    }
    setPay(pay) {
        this.pay = pay;
    }
    toString() {
        return `Staff[Person[name = ${this.getName()}, address =${this.getAddress()},] school =${this.school}, pay= ${this.getPay()},]`;
    }
}
