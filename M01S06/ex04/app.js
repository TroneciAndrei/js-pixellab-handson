(function () {
  function showMessage(message) {
    const paragraphEl = document.createElement('p');
    paragraphEl.classList.add('message');
    paragraphEl.innerText = message;

    document.body.appendChild(paragraphEl);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      showMessage('Mouse este pe scena');
    });

    stage.addEventListener('mouseout', () => {
      showMessage('Mouse-ul nu este pe scena');
    });
  });
})();
