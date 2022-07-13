function onButtonClick() {
  alert('Butonul a fost apasat');
}

const buttonElement = document.querySelector('.btn');

const mediaQueryString = '(min-width: 650px)';
const mediaQueryList = window.matchMedia(mediaQueryString);
// if (mediaQueryList.matches) {
//   buttonElement.addEventListener('click', onButtonClick);
// }

mediaQueryList.matches
  ? buttonElement.addEventListener('click', onButtonClick)
  : buttonElement.removeEventListener('click', onButtonClick);

// mediaQueryList.addEventListener('change', function (event) {
//   const matches = event.matches;

//   matches === true
//     ? buttonElement.addEventListener('click', onButtonClick)
//     : buttonElement.removeEventListener('click', onButtonClick);
// });
