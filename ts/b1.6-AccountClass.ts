    class Account {
    private id: string;
    private name: string;
    private balance: number = 0;

    constructor(id: string, name: string, balance?: number) {
        this.id = id;
        this.name = name;
        if (balance) this.balance = balance;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getBalance(): number {
        return this.balance;
    }

    credit(amount: number) {
        this.balance = amount;
    }
    debit(amount: number) {
        return amount <= this.balance
        ? this.balance - amount
        : " Amount exceeded balance ";
    }
    transferTo(another: Account, amount: number) {
        if (amount <= this.balance) {
        another.credit(amount);
        this.debit(amount);
        }
    }

    toString(): string {
        return (
        "Account[ID=" +
        this.getId() +
        " Name =" +
        this.getName() +
        " Balance =" +
        this.getBalance() +
        "]"
        );
    }
    }
