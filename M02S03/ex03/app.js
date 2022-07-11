const stage = document.querySelector('.stage');

let counter = 0;

stage.addEventListener('mouseover', function () {
  // this este elementul de DOM

  const message = 'Mouse-ul este pe scena';

  // console.log(message);

  showMessage('.message', message);

  counterMessage('.counter');

  counterSides('.counterSides');
});

stage.addEventListener('mouseout', function () {
  const message = 'Mouse-ul NU este pe scena';

  showMessage('.message', message);
});

const showMessage = (targetSelector = '.message', message) => {
  let element = document.querySelector(targetSelector);

  if (element === null) {
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.innerText = message;
};

const counterMessage = (targetSelector = '.counter') => {
  counter++;
  let element = document.querySelector(targetSelector);

  if (element === null) {
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }
  element.style.margin = '20px';
  element.innerText = counter;
};

const counterSides = (targetSelector = '.counterSides') => {
  let counterSides = counter * 2;

  let element = document.querySelector(targetSelector);
  if (element === null) {
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.style.margin = '20px';
  element.innerText = counterSides;
};
