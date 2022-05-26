var object = {
  name: 'Andrei',
  surname: 'Troneci',
  age: 25,
  petOwner: true,
  carOwner: false,
};

console.log(object.name);
console.log(object.age.toString());

// Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare

console.log(
  'Ma numesc' +
    ' ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am' +
    ' ' +
    object.age +
    ' ' +
    'ani.',
);
console.warn(
  `Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare)`,
);
console.log((2022 - object.age).toString());

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(
  object.name + ' s-a nascut in ' + (2022 - object.age).toString() + '.',
);
