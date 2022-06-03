// var i = 1;
// while (i <= 100) {
//   console.log(i);

//   i++;
// }

//  Ce se intampla daca i este initializat cu valoarea 101?
// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// while (i < 100) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 67.

// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// while (i < 67) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
// while (i < 100) {
//   console.log(i);

//   if (i >= 12) {
//     break;
//   }

//   i++;
// }
// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv). adaugam i++ in if inainte de continue;
// while (i <= 32) {
//   if (i % 2 !== 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.

var defaultNumber = 5;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var i = 0;
var number = prompt('Introdu un numar');
var limit = prompt('Care este limita?');

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

while (i <= limit) {
  if (i % number !== 0) {
    i++;
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
  i++;
}
