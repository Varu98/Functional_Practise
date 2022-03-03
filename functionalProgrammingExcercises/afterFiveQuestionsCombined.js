// Given an array. Write a function to find the product of all elements which are even.
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];
// Your output should be: 96

// const isEven = (num) => num % 2 === 0;

// const productOfNumbers = (product, number) => product * number;

// const output = arr.filter(isEven).reduce(productOfNumbers);
// output;

// ==========Next Question=============
// 7. Given an array of objects. Write a function to find the sum of ages of each person.
// Your output should be: 121 /*** 60+36+16+9 ***/
// const arr = [
//   {
//     name: "Jay",
//     age: 60,
//   },
//   {
//     name: "Gloria",
//     age: 36,
//   },
//   {
//     name: "Manny",
//     age: 16,
//   },
//   {
//     name: "Joe",
//     age: 9,
//   },
// ];

// const personAge = (person) => person.age;
// const sumOfAge = (sum, age) => (sum += age);

// const output = arr.map(personAge).reduce(sumOfAge);
// output;

// ==========Next Question=============
// // 8. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.
// const arr = ["You", "all", "are", "rockstars"];

// // Your output should be:
// // {'0': "You", '1': "all", '2': "are", '3': "rockstars"}
// const indexToKey = (keyWithWords, current, index) => ({
//   ...keyWithWords,
//   [index]: current,
// });

// const output = arr.reduce(indexToKey, {});
// output;

// ==========Next Question=============
// 9. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

// Your Output should be:
// [
// 	{
// 		name: "Apple",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Mango",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Potato"
// 		type: "vegetable"
// 	},
// 	{
// 		name: "Guava",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Capsicum",
// 		type: "vegetable"
// 	}
// ]
// const arr = [
//   {
//     name: "Apple",
//   },
//   {
//     name: "Mango",
//   },
//   {
//     name: "Potato",
//   },
//   {
//     name: "Guava",
//   },
//   {
//     name: "Capsicum",
//   },
// ];

// const addFruitOrVeg = (obj, curr) =>
//   curr.name.length <= 5
//     ? [...obj, { ...curr, type: "fruit" }]
//     : [...obj, { ...curr, type: "vegetable" }];

// const output = arr.reduce(addFruitOrVeg, []);
// output;

// ==========Next Question=============

// const inventory = [
//   { name: "fans", quantity: 3 },
//   { name: "chimneys", quantity: 0 },
//   { name: "bulbs", quantity: 5 },
//   { name: "stove", quantity: 1 },
// ];

// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

// a
// const isLessThan2 = (inventory, curr) =>
//   curr.quantity < 2 ? [...inventory, curr.name] : [...inventory];
// const output = inventory.reduce(isLessThan2, []);
// output;
// b
// const totalQuantity = (total, current) => (total += current.quantity);
// const output = inventory.reduce(totalQuantity, 0);
// output;
// c
// const findQuantity0 = (obj) => (obj.quantity === 0 ? obj : null);
// const output = inventory.filter(findQuantity0);
// output;

// Given an array. Write a function to join all elements of the array with a hyphen in between them.

// ==========Next Question=============
// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red
// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];
// const output = arr.join("-");

// ==========Next Question=============
// Write a function that accepts a number as input and inserts hyphens between every two even numbers.
// If your input is: 24345687

// Your output should be: 2-23456-87
