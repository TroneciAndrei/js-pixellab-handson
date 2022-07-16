// studio
const buttons = document.querySelectorAll('button');
const box = document.querySelector('.box');
const colorInput = document.querySelector('.dynamicColorForm input');
const resetButton = document.querySelector('.reset');

buttons.forEach(function (button) {
  const textColor = button.innerText.toLowerCase();

  button.style.backgroundColor = textColor;
});

document.addEventListener('click', function (event) {
  // recipe

  const target = event.target;

  if (target.classList.contains('reset')) {
    return;
  }

  if (target.nodeName === 'BUTTON' && target.type === 'button') {
    box.style.backgroundColor = target.style.backgroundColor;
  }
});

colorInput.addEventListener('change', function () {
  const dynamicButton = this.previousElementSibling;

  dynamicButton.style.backgroundColor = this.value;
});

colorInput.parentElement.addEventListener('submit', function (event) {
  const dynamicButton = this.querySelector('button[type="button"]');

  dynamicButton.style.backgroundColor = colorInput.value;
  console.log(dynamicButton);

  event.preventDefault();
});

resetButton.addEventListener('click', function () {
  box.removeAttribute('style');
});
