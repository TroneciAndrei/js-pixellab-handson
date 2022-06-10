var person = {
  name: 'Andrei',
  surname: 'Troneci',
  age: 25,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
    andra: {
      name: 'Andra',
      surname: 'Andrason',
      age: 27,
    },
  },
};

console.warn(
  'Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true. Folosind propozitii de forma: person.name cunoaste: html. person.name cunoaste: javaScript.',
);
var skillKeys = Object.keys(person.skills);
skillKeys.forEach(function (skill) {
  if (person.skills[skill] !== true) {
    return;
  }

  console.log(`${person.name} cunoaste: ${skill}.`);
});

console.warn(
  'Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor. ',
);
Object.keys(person.friends)
  .reverse()
  .forEach(function (friendName) {
    var friend = person.friends[friendName];
    console.log(`${friend.surname} ${friend.name}`);
  });

console.warn(
  'Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()',
);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (friendName, index, friendNames) {
  var friend = person.friends[friendName];
  var punctuation = ', ';
  var friendsCount = friendNames.length;

  if (friendsCount - 2 === index) {
    punctuation = ' si ';
  }

  if (friendsCount - 1 === index) {
    punctuation = '.';
  }
  message += `${friend.name}${punctuation}`;
});
console.log(message);

console.warn(
  'Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…',
);
Object.keys(person.friends).forEach(function (friendName) {
  var friend = person.friends[friendName];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${ageDiff} ani.`,
  );
});

console.warn(
  `Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.`,
);
Object.keys(person.skills).forEach(function (personSkill) {
  console.log(personSkill);
});

console.warn(
  `Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.`,
);
Object.keys(person.friends).forEach(function (friendName) {
  var friend = person.friends[friendName];
  console.log(friend.name + ' ' + friend.surname);
});

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()`,
);
let message01 = 'Prietenii mei sunt: ';

Object.keys(person.friends).forEach(function (friendName, index) {
  var friend = person.friends[friendName];
  var punctuation = ', ';
  // Cum aflam index-ul in asa fel in cat sa scadem -1 si sa modificam punctuatia?
  if (index === person.friends.length - 1) {
    punctuation = '.';
  }

  if (index === person.friends.length - 2) {
    punctuation = ' si ';
  }

  message01 += friend.name + ' ' + friend.surname + punctuation;
});

console.log(message01);

console.warn(
  `Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”`,
);

Object.keys(person.friends).forEach(function (friendName) {
  var friend = person.friends[friendName];

  console.log(`${friend.name} are ${friend.age} ani.`);
});
