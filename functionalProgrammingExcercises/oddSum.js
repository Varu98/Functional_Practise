const arr = [12, 43, 2, 12, 5, 6, 12, 7, 76, 23, 21, 54, 46];

const oddSum = (num, curr) => (curr % 2 ? (num += curr) : num);

const output = arr.reduce(oddSum);

output;
