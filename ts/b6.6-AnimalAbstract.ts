class AAnimal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class ACat extends AAnimal {
  constructor(name: string) {
    super(name);
  }
  greets(): void {
    console.log("Meos");
  }
}

class ADog extends AAnimal {
  constructor(name: string) {
    super(name);
  }

  greets(another?: ADog): void {
    another ? console.log("Wooooof") : console.log("woof");
  }
}

class ABigDog extends ADog {
  constructor(name: string) {
    super(name);
  }

  greets(another?: ADog, bigDog?: ABigDog): void {
    another
      ? console.log("Wooooof")
      : bigDog
      ? console.log("Woooooooooof")
      : console.log("woof");
  }
}
