// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "김승회",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "김승회",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

// person.role.push("admin");
// person.role[1] = 10;

person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sport"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
