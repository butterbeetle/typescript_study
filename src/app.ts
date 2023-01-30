class Department {
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReports(value);
  }

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployees(name: string) {
    if (name === "Max") return;
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

console.log(it);
const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";
accounting.addReports("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployees("Max");
accounting.addEmployees("Manu");

accounting.printReports();
accounting.printEmployeesInformation();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
