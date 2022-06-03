// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;

// do {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 52
// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 52);

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// var i = 1;

// do {
//   console.log(i);

//   if (i >= 12) {
//     break;
//   }

//   i++;
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 8;

// do {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);

//   i++;
// } while (i < 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
var defaultNumber = 5;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var limitInferior = prompt('Care este limita inferioara');
var i = limitInferior;
var number = prompt('Introdu un numar');

var limitSuperior = prompt('Care este limita superioara');

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

do {
  if (i % number !== 0) {
    i++;
    continue;
  }

  i++;
} while (i <= limitSuperior);
console.log(`Multiplii de ${number}`);
