var i = 0;

// for (i = 0; i <= 3; i++) {
//   console.log(i);
// }

//Modifica exemplul astfel incat bucla sa numere de la 1 la 100.
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

//Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// for (i = 1; i < 100; i++) {
//   console.log(i);
// }

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// for (i = 1; i < 100; i++) {
//   console.log(i);
//   if (i === 50) {
//     break;
//   }
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 100 (inclusiv 100).
// for (i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// /In mod similar, afiseaza doar numerele care sunt divizibile cu 5.
for (i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
