class Deparment {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Deparment) {
    console.log(`Deparment (${this.id}): ${this.name}`);
  }

  addEmployees(employees: string) {
    // this.id = "d2"
    this.employees.push(employees);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Deparment("d1", "Accounting");

accounting.addEmployees("Max");
accounting.addEmployees("Manu");

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeesInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
