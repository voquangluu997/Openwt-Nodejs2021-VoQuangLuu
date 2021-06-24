class AAnimal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class ACat extends AAnimal {
    constructor(name) {
        super(name);
    }
    greets() {
        console.log("Meos");
    }
}
class ADog extends AAnimal {
    constructor(name) {
        super(name);
    }
    greets(another) {
        another ? console.log("Wooooof") : console.log("woof");
    }
}
class ABigDog extends ADog {
    constructor(name) {
        super(name);
    }
    greets(another, bigDog) {
        another
            ? console.log("Wooooof")
            : bigDog
                ? console.log("Woooooooooof")
                : console.log("woof");
    }
}
