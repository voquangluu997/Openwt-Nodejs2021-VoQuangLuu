class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    toString() {
        return `Animal[name = ${this.name}]`;
    }
}
class Mammal extends Animal {
    constructor(name) {
        super(name);
    }
    toString() {
        return `Mamal[Animal[name = ${this.getName()}]]`;
    }
}
class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    greets() {
        console.log("Meos");
    }
    toString() {
        return `Cat[Mamal[Animal[name = ${this.getName()}]]]`;
    }
}
class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    greets(another) {
        another ? console.log("Wooooof") : console.log("woof");
    }
    toString() {
        return `Dog[Mamal[Animal[name = ${this.getName()}]]]`;
    }
}
