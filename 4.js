// write a function which can tell wether a number is less than 10 or not . Supply this function to array.filter() to get an array with no 10s in it.

const array = [1, 2, 3, 4, 56, 87, 84, 15, 58];

const isMoreThan10 = (num) => num > 10;

console.log(array.filter(isMoreThan10));

// given an array of numbers return an array with all numbers incremented by  2
const incrementByTwo = (num) => num + 2;

console.log(array.map(incrementByTwo));
// given an arrays of numbers return an object for each item

let objectFromArray = (array.map = (e) => {
  let obj = { a: e };
  return obj;
});

objectFromArray;
