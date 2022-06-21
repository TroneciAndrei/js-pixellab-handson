(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButtons = document.querySelector('#removeButtons');
    const messageClass = 'message';
    let eventBound = true;

    showButton.addEventListener('click', showAlert);

    showMessage('Alerta va fi afisata');

    // hoisting
    function showAlert() {
      alert('Butonul a fost apasat');
    }

    function showMessage(message) {
      let paragraphEl = document.querySelector(`.${messageClass}`);

      if (paragraphEl === null) {
        paragraphEl = document.createElement('p');
        paragraphEl.classList.add(messageClass);

        document.body.append(paragraphEl);
      }

      paragraphEl.innerText = message;
    }

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);

        eventBound = false;

        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
      } else {
        showButton.addEventListener('click', showAlert);

        eventBound = true;

        this.innerText = 'Opreste Afisarea';
        showMessage('Alerta va fi afisata');
      }
    });

    removeButtons.addEventListener('click', function () {
      const removeButtonsConfirmed = confirm('Elimina butoane?');

      if (removeButtonsConfirmed === false) {
        return;
      }

      showButton.remove();
      toggleEventButton.remove();
    });
  });
})();
