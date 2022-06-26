class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  topSpeed = 160;
  topReverseSpeed = -50;
  areLightsOn = false;

  isTrunkOpen = false;

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  // how to preserver this
  // the modern way
  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  stop() {
    this.speed = 0;
    console.log(this.speed);
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach((item) => {
  console.log(
    `Masina era marca ${item.make} si se deplasa cu ${item.speed} km/h.`,
  );
});
