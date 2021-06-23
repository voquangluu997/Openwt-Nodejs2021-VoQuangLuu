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
    constructor(name, price, authors, qty) {
        this.qty = 0;
        this.name = name;
        this.price = price;
        this.authors = authors;
        if (qty)
            this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
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
        return `Book [ name= ${this.name} Authors = ${this.authors.map((item) => {
            return `[name : ${item.getName()}, email : ${item.getEmail()},gender : ${item.getGender()},]`;
        })}  price = ${this.price} qty = ${this.qty}]`;
    }
}
