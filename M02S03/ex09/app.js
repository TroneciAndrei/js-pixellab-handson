// Se incarca pagina sub 500
// ul.style.display = none;
// addEventListener pe h1 ( afiseaza / ascunde lista)

// se incarca pagina peste 500
// nu se intampla nimic ul.style.display = block

// se redimensioneaza pagina sub 500
// ul.style.display = none
// addEventListener pe h1(afiseaza/ascunde lista);

// se redimensioneaza pagina peste 500
// afisam lista ul.style.display = block;
// removeEventListener de pe h1

// MatchMedia
const headerElement = document.querySelector('h1');
const ulElement = document.querySelector('ul');
const mediaQueryString = '(min-width: 500px)';
const mediaQueryList = window.matchMedia(mediaQueryString);

const onClick = () => {
  ulElement.style.display === 'none'
    ? (ulElement.style.display = 'block')
    : (ulElement.style.display = 'none');
};

const lowRes = () => {
  if (!mediaQueryList.matches) {
    ulElement.style.display = 'none';
    headerElement.addEventListener('click', onClick);
  }
};

const highRes = () => {
  if (mediaQueryList.matches) {
    ulElement.style.display = 'block';
    headerElement.removeEventListener('click', onClick);
  }
};

mediaQueryList.addEventListener('change', (event) => {
  const matches = event.matches;

  matches === true ? highRes() : lowRes();
});

// Resize
// document.addEventListener('DOMContentLoaded', () => {
//   const headerElement = document.querySelector('h1');
//   const ulElement = document.querySelector('ul');

//   const onClick = () => {
//     ulElement.style.display === 'none'
//       ? (ulElement.style.display = 'block')
//       : (ulElement.style.display = 'none');
//   };

//   window.addEventListener('resize', function () {
//     const width = this.innerWidth;

//     if (width < 500) {
//       ulElement.style.display = 'none';
//       headerElement.addEventListener('click', onClick);
//     }

//     if (width >= 500) {
//       ulElement.style.display = 'block';
//       headerElement.removeEventListener('click', onClick);
//     }
//   });
// });
