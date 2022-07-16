// studio
const buttons = document.querySelectorAll('button');
const boxs = document.querySelectorAll('.box');
const colorInput = document.querySelector('.dynamicColorForm input');
const resetButton = document.querySelector('.reset');
const radioButtons = document.querySelectorAll('.radioButton');

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
    for (const radioButton of radioButtons) {
      if (radioButton.type === 'radio' && radioButton.checked) {
        const parent = radioButton.parentElement;
        parent.style.backgroundColor = target.style.backgroundColor;
      }

      if (!radioButton.checked) {
        const parent = radioButton.parentElement;
        parent.style.backgroundColor = '';
      }
    }
  }
});

colorInput.addEventListener('change', function () {
  const dynamicButton = this.previousElementSibling;

  dynamicButton.style.backgroundColor = this.value;
  console.log(dynamicButton);
});

colorInput.parentElement.addEventListener('submit', function (event) {
  const dynamicButton = this.querySelector('button[type="button"]');

  dynamicButton.style.backgroundColor = colorInput.value;
  console.log(dynamicButton);

  event.preventDefault();
});

resetButton.addEventListener('click', function () {
  boxs.forEach(function (box) {
    box.removeAttribute('style');
  });
});
