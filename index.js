const getRandomInt = require('./random');
const warcraftBuildings = require('./warcraft-2-buildings.json');
const warcraftUnits = require('./warcraft-2-units.json');

class SeeWarcraft2 {
  getRandomBuilding() {
    const buildingsLength = warcraftBuildings.buildings.length;
    const randomBuilding = getRandomInt(buildingsLength)
    return warcraftBuildings.buildings[randomBuilding];
  }

  getRandomFaction() {
    const randomFaction = getRandomInt(2);
    return ['Alliance', 'Horde'][randomFaction];
  }

  getRandomUnit() {
    const unitsLength = warcraftUnits.units.length;
    const randomUnit = getRandomInt(unitsLength)
    return warcraftUnits.units[randomUnit];
  }
}

module.exports = SeeWarcraft2;
