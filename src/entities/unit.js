import { ArtifactsTypes } from "../constants/types";

class Unit {
  constructor(type, health = 10) {
    this.type = type;
    this.health = health;
    this.x = 0;
    this.artifacts = [ArtifactsTypes.CRYSTAL];
  }

  move(offset = 10) {
    this.x += offset;
  }

  hit(damage = 1) {
    let health = this.health - damage;
    console.log(
      "> Unit -> hit: health (was|new) = (" + this.health + "|" + health + ")",
      "| damage =",
      damage
    );
    this.health = health;
  }
}

export default Unit;
