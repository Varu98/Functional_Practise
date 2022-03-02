// Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
const arr = ["eat", "sleep", "code", "repeat"];

// Your output should be: ['repeat']
const moreThan5Char = (str) => str.length > 5;

const output = arr.filter(moreThan5Char);

output;
