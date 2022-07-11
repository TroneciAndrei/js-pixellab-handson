const stage = document.querySelector('.stage');

stage.addEventListener('mouseover', function () {
  // this este elementul de DOM

  const message = 'Mouse-ul este pe scena';

  // console.log(message);

  showMessage('.message', message);
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

// pentru exercitiul 3 trebuie sa facem cu cu counter = 0 si sa-i dam increase de fiecare data cand intra in scena mouse-ul;
