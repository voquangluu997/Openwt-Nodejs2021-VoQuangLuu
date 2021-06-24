class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getGender() {
        return this.gender;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Author[name= ${this.name} Email = ${this.email} Gender = ${this.gender}]`;
    }
}
class Book {
    constructor(name, price, author, qty) {
        this.qty = 0;
        this.name = name;
        this.price = price;
        this.author = author;
        if (qty)
            this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.author;
    }
    getqty() {
        return this.qty;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        return `Book [ name= ${this.name} Authors = [name : ${this.author.getName()}, email : ${this.author.getEmail()},gender : ${this.author.getGender()}] price = ${this.price} qty = ${this.qty}]`;
    }
}
