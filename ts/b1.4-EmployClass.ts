class Employee {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary: number;

  constructor(id: number, firstName: string, lastName: string, salary: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getId(): number {
    return this.id;
  }

  getFirstname(): string {
    return this.firstName;
  }

  getLastname(): string {
    return this.lastName;
  }

  getName(): string {
    return this.firstName + " " + this.lastName;
  }

  getSalary(): number {
    return this.salary;
  }
  setSalary(salary: number) {
    this.salary = salary;
  }

  getAnnualSalary(): number {
    return this.getSalary() * 12;
  }

  raiseSalary(percent: number) {
    return this.getSalary() * (1 + percent / 100);
  }

  toString(): string {
    return (
      "Employee[Name=" + this.getName() + " salary =" + this.getSalary() + "]"
    );
  }
}
