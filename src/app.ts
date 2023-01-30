class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }
  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployees("Max");
it.addEmployees("Manu");

// it.employees[2] = "Anna";

it.describe();
it.name = "NEW NAME";
it.printEmployeesInformation();

console.group(it);
const accounting = new AccountingDepartment("d2", []);
accounting.addReports("Something went wrong...");
accounting.printReports();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
