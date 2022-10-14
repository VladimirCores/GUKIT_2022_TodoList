import Unit from "./entities/unit";
import { UnitTypes } from "./constants/types";
import { utilsCanUnitBeDamage } from "./utils";

let player = new Unit(UnitTypes.MARINE, 100);

// console.log("> Code -> player: name = " + player.name);
// console.log("> Code -> player: health = " + player.health);
console.log("> =========================================");
// player.hit(90);

// if (utilsCanUnitBeDamage(player)) {
//   if (player.health < 10) {
//     console.log("> Code -> Unit has critical health");
//   } else if (player.health <= 98) {
//     console.log("> Code -> Unit damaged");
//   } else if (player.health < 100) {
//     console.log("> Code -> Unit damaged less 100");
//   } else {
//     console.log("> Code -> Unit healthy");
//   }
// }

switch (player.type) {
  case UnitTypes.MARINE:
    console.log("> Code -> switch: Unit MARINE");
    break;
  case UnitTypes.ZERG:
    console.log("> Code -> switch: Unit ZERG");
    break;
}

if (player.health <= 100) {
  console.log("> Code -> Unit damaged less 100 (another)", player);
}

let listOfNumber = [1, 2, 3];
let counter = 10;

while (counter-- > 5) {
  console.log("> Code -> counter = " + counter);
  // counter = counter - 1;
}

// do {} while ()

for (let i = 0; i < 10; i++) {
  console.log("> Code -> i = " + i);
}

listOfNumber.forEach((item, index, source) => {});
