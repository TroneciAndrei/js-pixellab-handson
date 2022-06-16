const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  stop: function () {
    this.speed = 0;
    console.log(this.speed);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    // early return
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    const self = this;
    self.turnLightsOn();

    setTimeout(function () {
      self.turnLightsOff();
    }, 3000);
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
};

car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();

console.log(`Masina are marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.log(`Viteza noua este ${car.speed} km/h.`);
