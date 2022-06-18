const paragraphEl = document.createElement('p');
const h1El = document.createElement('h1');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('Chrome')) {
  message = 'Navigezi folosind Chrome';
}

paragraphEl.innerText = message;

document.body.appendChild(paragraphEl);

function navigateOnFireFox() {
  if (userAgentString.includes('Mozilla')) {
    message = 'Navigezi folosind Mozilla FireFox';
    setTimeout(function () {
      const user = prompt(`${userAgentString} vrea sa stie cum te cheama`);
      const messageHeading = `Salut ${user}`;
      h1El.innerText = messageHeading;
    }, 3000);
  }

  paragraphEl.innerText = message;
  document.body.appendChild(paragraphEl);
  document.body.appendChild(h1El);
}

navigateOnFireFox();

function navigateOnInternetExplorer() {
  if (userAgentString.includes('Internet Explorer')) {
    message = 'Navigezi folosind Internet Explorer';
    const user = prompt(`${userAgentString} vrea sa stie cum te cheama`);
    const messageHeading = `Salut ${user}`;
    h1El.innerText = messageHeading;

    setTimeout(function () {
      paragraphEl.remove();
    }, 3000);
  }

  paragraphEl.innerText = message;
  document.body.appendChild(paragraphEl);
  document.body.appendChild(h1El);
}

navigateOnInternetExplorer();
