const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  accelerate: function () {
    this.speed++;
    console.log(
      `Masina are marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
    );
  },
  decelerate: () => {
    this.speed--;
    console.log(`Viteza noua este ${car.speed} km/h.`);
  },
  isTrunkOpen: false,
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  areLightsOn: false,
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    this.turnLightsOff();
  },
  setTimeout() {
    this, 1000;
  },
};
