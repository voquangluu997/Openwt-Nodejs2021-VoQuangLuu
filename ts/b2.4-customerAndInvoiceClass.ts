class Customer {
  private discount: number;
  private name: string;
  private id: number;

  constructor(name: string, id: number, discount: number) {
    this.name = name;
    this.id = id;
    this.discount = discount;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getDiscount(): number {
    return this.discount;
  }

  setDiscount(discount: number) {
    this.discount = discount;
  }

  toString(): string {
    return `name = ${this.name} id = ${this.id} discount = ${this.discount}`;
  }
}

class Invoice {
  private id: number;
  private customer: Customer;
  private amount: number;

  constructor(id: number, customer: Customer, amount: number) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }

  getId(): number {
    return this.id;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  getAmount(): number {
    return this.amount;
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }

  getCustomerId(): number {
    return this.customer.getId();
  }

  getCustomerName(): string {
    return this.customer.getName();
  }

  getCustomerDiscount(): number {
    return this.customer.getDiscount();
  }
  getAmountAfterDiscount(): void {
    this.amount = this.amount - this.customer.getDiscount();
  }

  toString(): string {
    return `Invoice[id=
      ${this.id} 
       customer = 
      ${this.customer.getName()} 
      (${this.customer.getId()})
      (${this.customer.getDiscount}%), amount = ${this.amount}
      ]`;
  }
}

