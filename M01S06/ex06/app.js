'use strict';

function paragraphLog(message) {
  let logContainer = document.querySelector('.logs');
  const messageParagraph = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');

    document.body.append(logContainer);
  }

  messageParagraph.innerText = message;

  logContainer.append(messageParagraph);
}

console.log = paragraphLog;

console.log('Apar in document', '2', '3');

// console.domLog = paragraphLog;

function foo() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

foo('Hello', 'Multiple', 'Parameters');
