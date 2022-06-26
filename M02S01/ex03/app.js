const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: 50,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}`);
  },

  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },

  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);
