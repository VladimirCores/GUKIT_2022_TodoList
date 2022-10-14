var name = "Vladimir";
// name = 'Alexander';
console.log("> Code -> name:", name);
let surname = "Minkin";
// surname = 'Gorin';
console.log("> Code -> surname:", surname);
const occupation = "Engineer";

let age = 35;
let listOfNumber = [1, 2, 3];
listOfNumber[0] = 10;
let obj = {
  name: name,
  list: listOfNumber,
  id: "123"
};
console.log("> Code -> listOfNumber:", listOfNumber);
obj.list[2] = 100;
obj.player = { health: 100 };
console.log("> Code -> object:", obj);

function addAndMultiply(one, two, multiplier = 10) {
  const result = one + two;
  return result * multiplier;
}

const result = addAndMultiply(1, 2);
console.log("> Code -> add result:", obj, addAndMultiply(10, 20));
