class InvoiceItem {
  private id: string;
  private desc: string;
  private qty: number;
  private unitPrice: number;

  constructor(id: string, desc: string, qty: number, unitPrice: number) {
    this.id = id;
    this.desc = desc;
    this.qty = qty;
    this.unitPrice = unitPrice;
  }

  getId(): string {
    return this.id;
  }

  getDesc(): string {
    return this.desc;
  }

  getQty(): number {
    return this.qty;
  }

  getUnitPrice(): number {
    return this.unitPrice;
  }
  setUnitPrice(unitPrice: number) {
    this.unitPrice = unitPrice;
  }

  getTotal(): number {
    return this.qty * this.unitPrice;
  }

  toString(): string {
    return (
      "InvoiceItem[id=" +
      this.getId() +
      " unitPrice =" +
      this.getUnitPrice() +
      " pty = " +
      this.getQty() +
      "]"
    );
  }
}
