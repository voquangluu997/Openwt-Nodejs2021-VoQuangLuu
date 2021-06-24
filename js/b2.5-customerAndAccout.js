class Customer {
    constructor(name, id, gender) {
        this.name = name;
        this.id = id;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getGender() {
        return this.gender;
    }
    toString() {
        return `name = ${this.name} id = ${this.id} gender = ${this.gender}`;
    }
}
class Account {
    constructor(id, customer, balance) {
        this.balance = 0;
        this.id = id;
        this.customer = customer;
        if (balance)
            this.balance = balance;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(b) {
        this.balance = b;
    }
    toString() {
        return `${this.customer.getName()} (${this.id}) balance = ${this.balance}`;
    }
    getCustomerName() {
        return this.customer.getName();
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        return this.balance > amount
            ? (this.balance -= amount)
            : "amount withdraw exceeds the current balance!";
    }
}
