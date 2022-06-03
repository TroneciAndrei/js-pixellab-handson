var defaultNumber = 2;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var i = 0;
var number = prompt('Introdu un numar');
var limit = prompt('Care este limita superiara?');

if (number === null || number.trim().length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
}

for (i = 6; i <= limit; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
}
