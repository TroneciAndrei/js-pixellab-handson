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

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.',
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  console.log(skill);
}

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
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.',
);
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);
  ageDiff >= 30
    ? console.log(ageDiff)
    : console.log('Varsta este mai mic de 30 de ani');
}

console.warn(
  ' Folosind un for, afiseaza suma anilor de nastere a persoanelor. ',
);

let sumYear = 0;
var birthYear = 2022;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  sumYear += Math.abs(friend.age - birthYear);
  var year = String(sumYear);
}
console.log(year);

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
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. ',
);
var message = ' ';
let sum = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);
  sum += friend.age;

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';

  if (sum % 2) {
    console.log(message.trim());
  }
}

console.warn(
  'Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.',
);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(' In mod similar, afiseaza skillurile care incep cu c ');
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('c') === true) {
    console.log(skill);
  }
}

console.warn(
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends',
);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friends = person.friends[i];
  sumAge += friends.age;
}
console.log(String(sumAge));

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. ',
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(`Diferenta de varsta este de ${ageDiff} ani`);
}

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.',
);
var message = ' ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
}
console.log(message.trim());

console.warn(
  `Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0)`,
);
var message = 'Prietenii mei sunt: ';
var reverseFriends = person.friends.slice().reverse();

for (var i = 0; i < reverseFriends.length; i++) {
  var friend = reverseFriends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // ultima iteratie
    punctuation = '.';
  }
  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message.trim());

console.warn(
  ` Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."`,
);
var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friends = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message += friends.surname + punctuation;
}
console.log(message);
