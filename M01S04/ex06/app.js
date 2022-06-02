var person = {
  name: 'Andrei',
  surname: 'Troneci',
  age: 25,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquerry',
    'node js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(
  'Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.',
);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // ultima iteratie
    punctuation = '.';
  }
  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}

console.log(message);

console.warn(
  'Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.',
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);
  ageDiff > 2
    ? console.log(ageDiff)
    : console.log('Varsta este mai mica de 2 ani');
}

console.warn(
  'Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.',
);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}
