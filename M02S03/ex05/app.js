document.addEventListener('DOMContentLoaded', function () {
  const debounce = throttleDebounce.debounce;
  let oldWidth = window.innerWidth;
  let oldHeight = window.innerHeight;
  showMessage(oldWidth, 'message');
  showMessage(oldHeight, 'message3');
  showMessage(showWindowSurface(oldWidth, oldHeight), 'message6');

  // recipe
  const debounceResize = debounce(1000, function () {
    const newWidth = this.innerWidth;
    const newHeight = this.innerHeight;
    showMessage(this.innerWidth.toString());
    showMessage(this.innerHeight.toString());
    showMessage(
      `Fereastra are acum suprafata de ${showWindowSurface(
        newHeight,
        newWidth,
      )}`,
      'message5',
    );

    if (oldWidth !== newWidth) {
      showMessage(`Fereastra si-a schimbat latimea. ${newWidth}`, 'message2');

      oldWidth = newWidth;
    }

    if (oldHeight !== newHeight) {
      showMessage(
        `Fereastra si-a schimbat inaltimea. ${newHeight}`,
        'message4',
      );

      oldHeight = newHeight;
    }
  });

  window.addEventListener('resize', debounceResize);

  // hoising
  function showMessage(message, className = 'message') {
    let paragraphElement = document.querySelector('.' + className);

    if (paragraphElement === null) {
      paragraphElement = document.createElement('p');
      paragraphElement.classList.add(className);
      document.body.append(paragraphElement);
    }

    paragraphElement.innerText = message;
  }

  function showWindowSurface(width, height) {
    return width * height;
  }
});
