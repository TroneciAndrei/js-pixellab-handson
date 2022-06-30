'use strict';

class Car {
  constructor(
    positionX,
    positionY,
    color,
    wheelColor,
    hubCapColor,
    areHazardsOn,
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;
    this.wheelColor = wheelColor;
    this.hubCapColor = hubCapColor;
    this.areHazardsOn = areHazardsOn;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    // this.carTop.style.backgroundColor = this.color;

    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);

    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    setInterval(() => {
      if (car01.positionY <= 100) {
        return;
      }
      car01.moveTo(500, car01.positionY - 5);
    }, 20);
  }

  engageBreak() {
    this.lightFront.classList.toggle('light--on');
    this.lightBack.classList.toggle('light--on');
  }

  disengageBreak() {
    this.lightBack.style.backgroundColor = 'white';
  }

  changeWhileColor(wheelColor) {
    this.wheelColor = wheelColor;

    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.wheelBack.style.backgroundColor = this.wheelColor;
  }

  changeCapColor(hubCapColor) {
    this.hubCapColor = hubCapColor;

    this.hubCapFront.style.backgroundColor = this.hubCapColor;
    this.hubCapBack.style.backgroundColor = this.hubCapColor;
  }

  toggleHazards() {
    if (this.areHazardsOn) {
      this.interval = setInterval(() => {
        this.engageBreak();
        this.areHazardsOn = false;
      }, 500);
    }

    if (!this.areHazardsOn) {
      clearInterval(this.interval);
      this.disengageBreak();
      delete this.interval;
    }
  }

  // toggleLights() {
  //   this.lightFront.classList.toggle('light--on');
  //   this.lightBack.classList.toggle('light--on');
  // }

  render() {
    document.body.append(this.frame);
  }
}

const car01 = new Car(100, 231, 'teal');
car01.render();
car01.moveTo(500, 600);

const car02 = new Car(10, 250, 'black', 'red', ' blue', true);
car02.render();
car02.changeWhileColor('magenta');
car02.changeCapColor('green');
car02.toggleHazards();
