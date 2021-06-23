class Person {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(ad: string) {
    this.address = ad;
  }

  toString(): string {
    return `Person[ name = ${this.name}, address= ${this.address}]`;
  }
}

class Student extends Person {
  private program: string;
  private year: number;
  private fee: number;

  constructor(
    name: string,
    address: string,
    program: string,
    year: number,
    fee: number
  ) {
    super(name, address);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  getProgram(): string {
    return this.program;
  }

  getYear(): number {
    return this.year;
  }

  getFee(): number {
    return this.fee;
  }

  setProgram(program: string) {
    this.program = program;
  }

  setYear(year: number) {
    this.year = year;
  }

  setFee(fee: number) {
    this.fee = fee;
  }

  toString(): string {
    return `Student[Person[name = ${this.getName()}, address =${this.getAddress()},] program =${
      this.program
    }, year= ${this.year}, fee = ${this.fee}]`;
  }
}

class Staff extends Person {
  private school: string;
  private pay: number;

  constructor(name: string, address: string, school: string, pay: number) {
    super(name, address);
    this.school = school;
    this.pay = pay;
  }

  getSchool(): string {
    return this.school;
  }

  getPay(): number {
    return this.pay;
  }

  setSchool(school: string) {
    this.school = school;
  }

  setPay(pay: number) {
    this.pay = pay;
  }
  toString(): string {
    return `Staff[Person[name = ${this.getName()}, address =${this.getAddress()},] school =${
      this.school
    }, pay= ${this.getPay()},]`;
  }
}
