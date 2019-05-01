const Gpio = require('onoff').Gpio;
const valve1 = new Gpio(17, 'out');
const valve2 = new Gpio(27, 'out');
const valve3 = new Gpio(22, 'out');
const valvesMap = new Map();
valvesMap.set("1", valve1);
valvesMap.set("2", valve2);
valvesMap.set("3", valve3);

var valves = {};



valves.openValve = (key) => valvesMap.get(key).writeSync(1);

valves.closeValve = (key) => valvesMap.get(key).writeSync(0);


module.exports = valves;
