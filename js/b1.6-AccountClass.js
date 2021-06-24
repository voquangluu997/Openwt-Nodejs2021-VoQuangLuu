class Account {
    constructor(id, name, balance) {
        this.balance = 0;
        this.id = id;
        this.name = name;
        if (balance)
            this.balance = balance;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    credit(amount) {
        this.balance = amount;
    }
    debit(amount) {
        return amount <= this.balance
            ? this.balance - amount
            : " Amount exceeded balance ";
    }
    transferTo(another, amount) {
        if (amount <= this.balance) {
            another.credit(amount);
            this.debit(amount);
        }
    }
    toString() {
        return ("Account[ID=" +
            this.getId() +
            " Name =" +
            this.getName() +
            " Balance =" +
            this.getBalance() +
            "]");
    }
}
