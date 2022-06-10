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
    'node.js',
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
  'Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.',
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(' In mod similar, afiseaza skillurile care contin litera a. ');

person.skills.forEach(function (skill) {
  if (skill.startsWith('a') === true) {
    console.log(skill);
  }
});

console.warn(
  ' Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."',
);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index) {
  var punctuation = ', ';

  if (index === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + friend.name + ' ' + friend.surname + punctuation;
});
console.log(message.trim());

console.warn(
  'Folosind forEach, afiseaza suma anilor de nastere a persoanelor ', //HELP
);
var sumYears = 0;
var birthYear = 2022;
person.friends.forEach(function (friend, index) {
  sumYears += Math.abs(friend.age - birthYear);
});
console.log(String(sumYears));

console.warn(
  ' Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.',
);
var total = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    total += friend.age;
  }
});
console.log(String(total));

console.warn(
  ' Folosind forEach, afiseaza suma anilor de nastere ai persoanelor care au varsta impara. ',
);
var sumAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age % 2 !== 0) {
    sumAge += friend.age;
    sumAge.toString();
  }
});
console.log(sumAge);

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.',
);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(
  'Afiseaza fraza: Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven...',
);

var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

console.warn(
  'Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.',
);

person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  'Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.',
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(' In mod similar, afiseaza skillurile care nu incep cu j.');
person.skills.forEach(function (skill) {
  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
});

console.warn(
  ' Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ',
);
var sumAge = 0;
person.friends.forEach(function (friend) {
  sumAge += friend.age;
});
console.log(String(sumAge));

person.friends.reverse().forEach(function (friend) {
  console.log(friend.name + ' ' + friend.surname);
});
