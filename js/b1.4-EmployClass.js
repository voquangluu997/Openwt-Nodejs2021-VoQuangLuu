class Employee {
    constructor(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getId() {
        return this.id;
    }
    getFirstname() {
        return this.firstName;
    }
    getLastname() {
        return this.lastName;
    }
    getName() {
        return this.firstName + " " + this.lastName;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.getSalary() * 12;
    }
    raiseSalary(percent) {
        return this.getSalary() * (1 + percent / 100);
    }
    toString() {
        return ("Employee[Name=" + this.getName() + " salary =" + this.getSalary() + "]");
    }
}
