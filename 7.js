const users = [
  { firstName: "Vardaan", lastName: "Agarwal", age: 24 },
  { firstName: "Varu", lastName: "Agarwal", age: 24 },
  {
    firstName: "Billi",
    lastName: "Cat",
    age: 4,
  },
  {
    firstName: "Ghileri",
    lastName: "yadav",
    age: 2,
  },
  {
    firstName: "Chaddi",
    lastName: "maurya",
    age: 1,
  },
];

// List of full names using map method
// const fullNames = (users) => `${users.firstName} ${users.lastName}`;
// const output = users.map(fullNames);
// console.log(output);

// write using reduce method the ages of people that show how many people have the same age
// const output = users.reduce((accum, curr) => {
//   if (accum[curr.age]) {
//     accum[curr.age] = ++accum[curr.age];
//   } else {
//     accum[curr.age] = 1;
//   }

//   return accum;
// }, {});

// console.log(output);

// using reduce method find and print the users with age 24
const output = users.reduce((accum, curr) => {
  if (curr.age >= 24) {
    accum.push(curr.firstName);
  }
  return accum;
}, []);
console.log(output);
