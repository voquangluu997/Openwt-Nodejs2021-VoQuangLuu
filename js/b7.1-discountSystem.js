class MCustomer {
    constructor(name) {
        this.member = false;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    getmemberType() {
        return this.memberType;
    }
    setMember(member) {
        this.member = member;
    }
    setMemberType(type) {
        this.memberType = type;
    }
    toString() {
        return `name = ${this.name} member = ${this.member} memberType = ${this.memberType}`;
    }
}
class Visit {
    constructor(name, date) {
        this.date = date;
        this.customer = new MCustomer(name);
    }
    getName() {
        return this.customer.getName();
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setServiceExpense(s) {
        this.serviceExpense = s;
    }
    setProductExpense(p) {
        this.productExpense = p;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return ` customer : ${this.customer.getName()} date : ${this.date} serviceExpensice (${this.serviceExpense}) productExpense ${this.productExpense}
    }`;
    }
}
class DiscountRate {
    static getServiceDiscountRate(type) {
        return this[type];
    }
    static getProductDiscountRate(type) {
        return this[type];
    }
}
DiscountRate.serviceDiscountPremium = 0.2;
DiscountRate.serviceDiscountGold = 0.15;
DiscountRate.serviceDiscountSilver = 0.1;
DiscountRate.productDiscountPremium = 0.1;
DiscountRate.productDiscountGold = 0.1;
DiscountRate.productDiscountSilver = 0.1;
// console.log(DiscountRate.serviceDiscountGold);
