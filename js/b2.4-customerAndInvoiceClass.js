class Customer {
    constructor(name, id, discount) {
        this.name = name;
        this.id = id;
        this.discount = discount;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `name = ${this.name} id = ${this.id} discount = ${this.discount}`;
    }
}
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    getAmount() {
        return this.amount;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
        return this.customer.getId();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerDiscount() {
        return this.customer.getDiscount();
    }
    getAmountAfterDiscount() {
        this.amount = this.amount - this.customer.getDiscount();
    }
    toString() {
        return `Invoice[id=
      ${this.id} 
       customer = 
      ${this.customer.getName()} 
      (${this.customer.getId()})
      (${this.customer.getDiscount}%), amount = ${this.amount}
      ]`;
    }
}
