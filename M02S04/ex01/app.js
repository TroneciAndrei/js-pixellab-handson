document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.box');
  const applyButton = document.querySelector('.applyButton');
  const animationClassName = 'animate-class';
  const darkButton = document.querySelector('.darkBackground');

  // setTimeout(function () {
  //   box.classList.add(animationClassName);

  //   setTimeout(function () {
  //     box.classList.remove(animationClassName);
  //   }, 2000);
  // }, 2000);

  applyButton.addEventListener('click', function () {
    // 'this' points to the element
    box.classList.toggle(animationClassName);
    // if (box.classList.contains(animationClassName)) {
    //   box.classList.add(animationClassName);
    //   this.innerText = 'Aplica';
    //   this.title = 'Aplica';
    // } else {
    //   box.classList.remove(animationClassName);
    //   this.innerText = 'Elimina';
    //   this.title = 'Elimina';
    // }

    if (box.classList.contains(animationClassName)) {
      this.innerText = 'Elimina';
      this.title = 'Elimina';
    } else {
      this.innerText = 'Aplica';
      this.title = 'Aplica';
    }
  });

  darkButton.addEventListener('click', () => {
    box.setAttribute('style', 'background-color:#000');
  });
});
