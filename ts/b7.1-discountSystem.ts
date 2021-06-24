class MCustomer {
  private memberType: string;
  private name: string;
  private member: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  isMember(): boolean {
    return this.member;
  }

  getmemberType(): string {
    return this.memberType;
  }

  setMember(member: boolean) {
    this.member = member;
  }

  setMemberType(type: string) {
    this.memberType = type;
  }

  toString(): string {
    return `name = ${this.name} member = ${this.member} memberType = ${this.memberType}`;
  }
}
class Visit {
  private date: Date;
  private customer: MCustomer;
  private serviceExpense: number;
  private productExpense: number;

  constructor(name: string, date: Date) {
    this.date = date;
    this.customer = new MCustomer(name);
  }

  getName(): string {
    return this.customer.getName();
  }

  getServiceExpense(): number {
    return this.serviceExpense;
  }

  getProductExpense(): number {
    return this.productExpense;
  }

  setServiceExpense(s: number) {
    this.serviceExpense = s;
  }
  setProductExpense(p: number) {
    this.productExpense = p;
  }

  getTotalExpense(): number {
    return this.serviceExpense + this.productExpense;
  }

  toString(): string {
    return ` customer : ${this.customer.getName()} date : ${
      this.date
    } serviceExpensice (${this.serviceExpense}) productExpense ${
      this.productExpense
    }
    }`;
  }
}

class DiscountRate {
  static serviceDiscountPremium: number = 0.2;
  static serviceDiscountGold: number = 0.15;
  static serviceDiscountSilver: number = 0.1;
  static productDiscountPremium: number = 0.1;
  static productDiscountGold: number = 0.1;
  static productDiscountSilver: number = 0.1;

  static getServiceDiscountRate(type: string): number {
    return this[type];
  }

  static getProductDiscountRate(type: string): number {
    return this[type];
  }
}
// console.log(DiscountRate.serviceDiscountGold);
