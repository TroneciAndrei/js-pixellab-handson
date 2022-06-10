const person = {
  getName: function () {
    return 'Andrei Troneci';
  },
  getAge: () => {
    return 25;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);
const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);
const currentYear = new Date().getFullYear();
const firstBirthYear = currentYear - person.getAge();
console.log(firstBirthYear);

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);

console.log(`'${firstBirthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);

const personAge = person.getAge();
console.log(`Ma numesc ${personName} si am ${personAge} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(personName);

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);
console.log(personAge);

console.warn(
  `Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);
console.log(`M-am nascut in ${firstBirthYear}.`);

console.log(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);
const currentAge = currentYear - firstBirthYear;

console.log(
  `Ma numesc ${personName} m-am nascut acum ${currentAge} ani in anul ${firstBirthYear}!`,
);
