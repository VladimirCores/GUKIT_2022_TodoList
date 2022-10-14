var unitName = "Zealot";
var unitAmmo = 10;
var isUnitAlive = true;

var unitInventory = ["apple", "healthkit", "powerup"];

class Unit {
  constructor(type, ammo, health, isAlive = true) {
    this.type = type;
    this.ammo = ammo;
    this.health = health;
    this.isAlive = isAlive;
  }
}

var unitZealot = new Unit("Zealot", 10, 100);
var unitMarine = new Unit("Marine", 20, 200);
