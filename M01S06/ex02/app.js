const paragraphEl = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('chrome')) {
  message = 'Navigezi folosind Chrome';
}

paragraphEl.innerText = message;

document.body.appendChild(paragraphEl);
