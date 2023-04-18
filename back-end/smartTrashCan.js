// smartTrashCan.js

const Gpio = require('onoff').Gpio;
const trigger = new Gpio(17, 'out');
const echo = new Gpio(18, 'in');

function startSensor() {
  trigger.writeSync(0);
  setTimeout(() => {
    trigger.writeSync(1);
    setTimeout(() => {
      trigger.writeSync(0);
    }, 0.01);
  }, 0.01);

  let start = Date.now();

  while (echo.readSync() == 0) {
    start = Date.now();
  }

  while (echo.readSync() == 1) {
    if (Date.now() - start > 10000) break;
  }

  const pulseDuration = Date.now() - start;
  const distance = Math.round(pulseDuration * 34300 / 2 / 1000000);

  console.log(`Distance: ${distance} cm`);

  setTimeout(startSensor, 1000);
}

module.exports = { startSensor };
