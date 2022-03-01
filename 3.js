// write a function birthday() to take a person's name and age in an object and increase age.

const birthday = (person) => ({ ...person, age: person.age++ });

let varu = {
  fname: "varu",
  age: 24,
};

console.log(birthday(varu));
console.log(birthday(varu));
console.log(birthday(varu));
console.log(birthday(varu));
