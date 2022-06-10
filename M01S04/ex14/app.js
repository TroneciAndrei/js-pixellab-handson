var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};
console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);

Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

var sumPetsAge = 0;
Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  sumPetsAge += pet.age;
});
console.log(sumPetsAge);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);

Object.keys(person.pets).forEach(function (petsName) {
  var pet = person.pets[petsName];

  var currentYear = new Date().getFullYear();
  var currentAge = currentYear - person.birthYear;

  var ageDiff = currentAge - pet.age;

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);

Object.keys(person.pets)
  .reverse()
  .forEach(function (petsName) {
    var pet = person.pets[petsName];

    console.log(`Animalul meu se numeste ${pet.name}`);
  });

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” `,
);
let petAge = 0;
let petName = '';
for (var i = 0; i < person.pets.length; i++) {
  let pet = person.pets[i];

  if (petAge <= pet.age) {
    petAge = pet.age;
  }

  var currentYear = new Date().getFullYear();
  var currentAge = currentYear - person.birthYear;
  var ageDiff = currentAge - petAge;

  if (pet.age === petAge) {
    petName = pet.name;
  }
}
console.log(
  `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
var message = 'Am ';
person.pets.forEach(function (petsName, index) {
  var punctuation = ', ';

  if (index === person.pets.length - 1) {
    punctuation = '.';
  }

  if (index === person.pets.length - 2) {
    punctuation = ' si ';
  }

  message += petsName.species + punctuation;
});

console.log(message);
