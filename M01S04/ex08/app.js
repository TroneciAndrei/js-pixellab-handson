var i = 1;
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
while (i < 100) {
  console.log(i);

  if (i >= 50) {
    break;
  }

  i++;
}

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv). adaugam i++ in if inainte de continue;
