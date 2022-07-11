class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  // accelerate() {
  //   this.speed++;

  //   return this;
  // }

  accelerate(...numbers) {
    this.speed += Number(numbers);

    return this;
  }

  // decelerate() {
  //   this.speed--;

  //   return this;
  // }

  decelerate(...numbers) {
    this.speed -= Number(numbers);

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    return this;
  }

  displaySpeed(targetSelector = '.message') {
    let element = document.querySelector(targetSelector);

    if (element === null) {
      element = document.createElement('p');
      element.classList.add(targetSelector.replace('.', ''));
      document.body.append(element);
    }

    element.innerText = this.speed;
  }
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

audi.displaySpeed();

audi.accelerate(12).decelerate(3).accelerate(4);

audi.displaySpeed();

audi.setSpeed(4).accelerate(5);

audi.displaySpeed();
