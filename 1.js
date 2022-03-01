let obj = {
  name: "seema",
  myAge: 24,
};

let obj2 = {
  ...obj,
  myAge: obj.myAge - 4,
};
console.log(obj);
console.log(obj2);
