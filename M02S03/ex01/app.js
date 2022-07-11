class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  // accelerate(...numbers) {
  //   this.speed += Number(numbers);

  //   return this;
  // }

  decelerate() {
    this.speed--;

    return this;
  }

  // decelerate(...numbers) {
  //   this.speed -= Number(numbers);

  //   return this;
  // }
}

const audi = new Car('Audi', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

// console.log(audi.speed);
