class InvoiceItem {
    constructor(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    getId() {
        return this.id;
    }
    getDesc() {
        return this.desc;
    }
    getQty() {
        return this.qty;
    }
    getUnitPrice() {
        return this.unitPrice;
    }
    setUnitPrice(unitPrice) {
        this.unitPrice = unitPrice;
    }
    getTotal() {
        return this.qty * this.unitPrice;
    }
    toString() {
        return ("InvoiceItem[id=" +
            this.getId() +
            " unitPrice =" +
            this.getUnitPrice() +
            " pty = " +
            this.getQty() +
            "]");
    }
}
