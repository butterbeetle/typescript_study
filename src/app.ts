// Code goes here!
const userName = "Max";
// userName = "MaxMax";
let age = 30;
age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if(age > 20 ){
//   let isOld = true;
// }

// console.log(isOld)

const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));

const hobbies = ["A", "B"];
const activeHobbies = ["C"];

activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person };
