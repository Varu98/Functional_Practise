//can you write your own reduce using for loop
// [22, "tanay", 55, "tanvi", 5, 7, 9];

let numbers = [1, 3, 5, 22, 2, 11, 9];

console.log(
  numbers.forEach((element) => {
    let total;
    total = total + element;
  })
);
//find the sum of odd numbers in the array

//return an object with sum of odd numbers and sum of even numbers
// oddsum: 55, evensum: 88

let oddSum = (sum, num) => (num % 2 === 0 ? sum : sum + num);
