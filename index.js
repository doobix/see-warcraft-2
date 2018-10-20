const getRandomInt = require('./random');
const warcraftUnits = require('./warcraft-2-units.json');

class SeeWarcraft2 {
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
