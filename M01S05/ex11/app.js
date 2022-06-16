function calculateSurface(L, l, h) {
  const argumentsCount = arguments.length;

  if (argumentsCount === 1) {
    return L ** 2;
  }

  if (argumentsCount === 2) {
    return L * l;
  }

  if (argumentsCount === 3) {
    return 2 * (L * h + l * h + L * l);
  }
}

console.log(calculateSurface(2));
console.log(calculateSurface(20, 15, 5));

const calculateCircleArea = (L) => {
  const arie = Math.PI * calculateSurface(L);
  return arie;
};

console.log(calculateCircleArea(2, 2));
console.log(calculateCircleArea(20, 2));
console.log(calculateCircleArea(16, 2));

const pet = {
  getName: function () {
    return 'Bobita';
  },
  getSpecies: function () {
    return 'caine';
  },
  getAge: function () {
    return 3;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return pet[methodName]();
}

const petFirstName = accessor('Name');
const petAge = accessor('Age');
const petSpecies = accessor('Species');

console.log(`${petFirstName} este ${petSpecies} si are ${petAge} ani.`);
console.log(`Animalul meu are ${petAge} ani.`);
