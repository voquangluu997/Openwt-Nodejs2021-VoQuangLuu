class Author {
    private name: string;
    private email: string;
    private gender: string;
  
    constructor(name: string, email: string, gender: string) {
      this.name = name;
      this.email = email;
      this.gender = gender;
    }
  
    getName(): string {
      return this.name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getGender(): string {
      return this.gender;
    }
  
    setEmail(email: string) {
      this.email = email;
    }
  
    toString(): string {
      return `Author[name= ${this.name} Email = ${this.email} Gender = ${this.gender}]`;
    }
  }
  
  class Book {
    private name: string;
    private price: number;
    private authors: Author[];
    private qty: number = 0;
  
    constructor(name: string, price: number, authors: Author[], qty?: number) {
      this.name = name;
      this.price = price;
      this.authors = authors;
      if (qty) this.qty = qty;
    }
  
    getName(): string {
      return this.name;
    }
  
    getAuthors(): Author[] {
      return this.authors;
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
      return `Book [ name= ${this.name} Authors = ${this.authors.map((item) => {
        return `[name : ${item.getName()}, email : ${item.getEmail()},gender : ${item.getGender()},]`;
      })}  price = ${this.price} qty = ${this.qty}]`;
    }
  }
  