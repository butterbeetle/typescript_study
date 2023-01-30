class Deparment {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Deparment) {
    console.log("Deparment: " + this.name);
  }
}

const accounting = new Deparment("Accounting");

accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accountingCopy.describe();
