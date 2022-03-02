const arr = [12, 43, 2, 12, 5, 6, 12, 7, 76, 23, 21, 54, 46];

const oddIndiceSum = (num, curr, index, arr) => (num += arr[index + 1]);

const output = arr.reduce(oddIndiceSum);

console.log(output);
