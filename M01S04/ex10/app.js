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

console.warn(
  'Afiseaza fraza: Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven...',
);

var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  // v2 concatenare
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
