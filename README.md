# see-warcraft-2

[![npm package](https://nodei.co/npm/see-warcraft-2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/see-warcraft-2/)

Random Warcraft II stuff

## Installation

```
npm i --save see-warcraft-2
```

## Usage

### Create instance of SeeWarcraft2

```
const SeeWarcraft2 = require('./node_modules/see-warcraft-2');
const swc = new SeeWarcraft2();
```

### `swc.getRandomFaction()`

```
Horde
```

### `swc.getRandomUnit()`

```
{
  name: 'Peasant',
  race: 'Human',
  faction: 'Alliance'
}
```

### `swc.getRandomBuilding()`

```
{
  name: 'Great Hall',
  race: 'Orc',
  faction: 'Horde'
},
```

## License

[MIT](/LICENSE)
