const arr = [1, 3, 5, 2, 22, 11, 9];

// const output = arr.reduce((accum, curr) => {
//   if (curr % 2) accum = accum + curr;
//   return accum;
// }, 0);

// output;

const output = arr.reduce(
  (oddEvenObj, curr) => {
    if (curr % 2) oddEvenObj[0].odd = oddEvenObj[0].odd + curr;
    oddEvenObj[1].even += curr;

    return oddEvenObj;
  },
  [{ odd: 0 }, { even: 0 }]
);

output;
