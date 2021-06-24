class Customer {
  private gender: string;
  private name: string;
  private id: number;

  constructor(name: string, id: number, gender: string) {
    this.name = name;
    this.id = id;
    this.gender = gender;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getGender(): string {
    return this.gender;
  }

  toString(): string {
    return `name = ${this.name} id = ${this.id} gender = ${this.gender}`;
  }
}
class Account {
  private id: string;
  private customer: Customer;
  private balance: number = 0;

  constructor(id: string, customer: Customer, balance?: number) {
    this.id = id;
    this.customer = customer;
    if (balance) this.balance = balance;
  }

  getId(): string {
    return this.id;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(b: number) {
    this.balance = b;
  }

  toString(): string {
    return `${this.customer.getName()} (${this.id}) balance = ${this.balance}`;
  }

  getCustomerName(): string {
    return this.customer.getName();
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount) {
    return this.balance > amount
      ? (this.balance -= amount)
      : "amount withdraw exceeds the current balance!";
  }

  
}
