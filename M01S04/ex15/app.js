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

for (let i = 0; i < person.friends.length; i++) {
  for (let j = 0; j < person.friends.length; j++) {
    var ageDiff = Math.abs(person.friends[i].age - person.friends[j].age);

    if (person.friends[i].name !== person.friends[j].name) {
      console.log(
        `Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}
