class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return `Animal[name = ${this.name}]`;
  }
}

class Mammal extends Animal {
  constructor(name: string) {
    super(name);
  }
  toString(): string {
    return `Mamal[Animal[name = ${this.getName()}]]`;
  }
}

class Cat extends Mammal {
  constructor(name: string) {
    super(name);
  }
  greets(): void {
    console.log("Meos");
  }

  toString(): string {
    return `Cat[Mamal[Animal[name = ${this.getName()}]]]`;
  }
}

class Dog extends Mammal {
  constructor(name: string) {
    super(name);
  }

  greets(another?: Dog): void {
    another ? console.log("Wooooof") : console.log("woof");
  }

  toString(): string {
    return `Dog[Mamal[Animal[name = ${this.getName()}]]]`;
  }
}
