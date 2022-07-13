function showMessage(
  target,
  message = 'Butonul a fost apasant in aceasta rezolutie',
) {
  const paragraphElement = document.createElement('p');
  paragraphElement.innerText = message;

  target.append(paragraphElement);
}

const buttonElement = document.querySelector('.btn');
const loResContainer = document.querySelector('.lo-res');
const midResContainer = document.querySelector('.mid-res');
const hiResContainer = document.querySelector('.high-res');

buttonElement.addEventListener('click', function () {
  const width = window.innerWidth;

  if (width < 650) {
    showMessage(loResContainer);
  }

  if (width >= 650 && width < 1000) {
    showMessage(midResContainer);
  }

  if (width >= 1000) {
    showMessage(hiResContainer);
  }
});
