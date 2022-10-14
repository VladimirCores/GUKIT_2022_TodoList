import { ArtifactsTypes, UnitTypes } from "./constants/types";

const utilsCanUnitBeDamage = (
  player,
  MORTAL_UNITS = [UnitTypes.ZERG, UnitTypes.MARINE]
) => {
  return (
    MORTAL_UNITS.indexOf(player.type) &&
    !player.artifacts.indexOf(ArtifactsTypes.CRYSTAL)
  );
};

export { utilsCanUnitBeDamage };
