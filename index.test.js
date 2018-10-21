const assert = require('assert');
const SeeWarcraft2 = require('./index');
const swc = new SeeWarcraft2();

const randomFaction = swc.getRandomFaction();
console.log(randomFaction);
assert(['Alliance', 'Horde'].includes(randomFaction));

const randomUnit = swc.getRandomUnit();
console.log(randomUnit);
assert(Object.keys(randomUnit).includes('name'));
assert(Object.keys(randomUnit).includes('race'));
assert(Object.keys(randomUnit).includes('faction'));

const randomBuilding = swc.getRandomBuilding();
console.log(randomBuilding);
assert(Object.keys(randomBuilding).includes('name'));
assert(Object.keys(randomBuilding).includes('race'));
assert(Object.keys(randomBuilding).includes('faction'));
