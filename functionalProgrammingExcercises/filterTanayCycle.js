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

const findPersonWithCycle = (person) => person.haveCycle;

const output = family.filter(findPersonWithCycle).map((person) => person.name);

output;
