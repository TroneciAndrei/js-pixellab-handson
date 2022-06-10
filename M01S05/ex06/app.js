const person = {
  getName: function () {
    return 'Andrei Troneci';
  },
  getAge: function () {
    return 25;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // return person.getName
  // return person.getAge

  return person[methodName]();
}

console.warn(
  `Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”`,
);

const personFirstName = accessor('Name');
const personAge = accessor('Age');
console.log(`Eu sunt ${personFirstName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);
const birthYear = new Date().getFullYear();
const firstBirthYear = birthYear - accessor('Age');
console.log(firstBirthYear.toString());

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.`,
);
const currentAge = birthYear - firstBirthYear;

console.log(
  `Ma numesc ${personFirstName}, am ${currentAge} ani si m-am nascut in anul ${firstBirthYear}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.`);
console.log(personFirstName);

console.warn(`Afiseaza varsta persoanei.`);
console.log(personAge);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”`,
);
console.log(`M-am nascut in ${firstBirthYear}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!`);
console.log(`Ma numesc ${personFirstName} si am ${currentAge} ani!`);
