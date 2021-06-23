class Author {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  toString(): string {
    return `Author[name= ${this.name} Email = ${this.email}]`;
  }
}

class Book {
  private isbn: string;
  private name: string;
  private price: number;
  private author: Author;
  private qty: number = 0;

  constructor(isbn : string, name: string, price: number, author: Author, qty?: number) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    if (qty) this.qty = qty;
  }

  getName(): string {
    return this.name;
  }

  getAuthors(): Author {
    return this.author;
  }

  getqty(): number {
    return this.qty;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  setQty(qty: number) {
    this.qty = qty;
  }

  toString(): string {
    return `Book [ name= ${
      this.name
    } Authors = [name : ${this.author.getName()}, email : ${this.author.getEmail()},gender : ${this.author.getGender()}] price = ${
      this.price
    } qty = ${this.qty}]`;
  }
}
