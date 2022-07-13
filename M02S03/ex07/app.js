document.addEventListener('DOMContentLoaded', function () {
  const onButtonClick = function () {
    alert('Butonul a fost apasat');
  };

  const buttonElement = document.querySelector('.btn');
  if (window.innerWidth >= 650) {
    buttonElement.addEventListener('click', onButtonClick);
  }

  window.addEventListener('resize', function () {
    const width = this.innerWidth;

    if (width < 650) {
      buttonElement.removeEventListener('click', onButtonClick);
    }

    if (width >= 650) {
      buttonElement.addEventListener('click', onButtonClick);
    }
  });
});
