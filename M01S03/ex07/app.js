var prop01 = document.getElementById('prop01');
var prop02 = document.getElementById('prop02');
var prop03 = document.getElementById('prop03');
var prop04 = document.getElementById('prop04');

var person = {
  firstName: 'Andrei',
  lastName: 'Troneci',
  email: 'troneciandrei@gmail.com',
  birthYear: 1996,
  zipCode: '123456',
  pets: [
    {
      name: 'Bulina',
      species: 'caine',
      age: 4,
    },
    {
      name: 'Kitkat',
      species: 'pisica',
      age: 3,
    },
    {
      name: 'Pasaroiul',
      species: 'pasare',
      age: 2,
    },
  ],
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2022 - person.pets[2].age).toString());

var difference = 2022 - person.birthYear - person.pets[0].age;
console.log(`${difference}`);

var dogAge = 2022 - person.pets[0].age;
var catAge = 2022 - person.pets[1].age;
var birdAge = 2022 - person.pets[2].age;
var differenceAge = person.pets[0].age - person.pets[2].age;

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

prop01.innerHTML =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa.';

prop02.innerHTML =
  'Diferenta de varsta dintre ' +
  person.pets[0].name +
  ' si ' +
  person.pets[1].name +
  ' este: ' +
  differenceAge +
  ' ani.';

prop03.innerHTML =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', ' +
  ' m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode +
  '.';

prop04.innerHTML =
  'Animalele mele s-au nascut in ' +
  dogAge +
  ', ' +
  catAge +
  ', ' +
  ' respectv ' +
  birdAge +
  '.';
