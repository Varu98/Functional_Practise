const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

//   Your output should be: ['Tanay', 'Tanvi']

const findPersonWithCycle = (arr) => arr.haveCycle === true;

const output = family.filter(findPersonWithCycle).map((e) => e.name);

output;
