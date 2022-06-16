function calculateSurface(L, l) {
  const argumentsCount = arguments.length;

  if (argumentsCount === 2) {
    return L * l;
  }

  if (argumentsCount === 1) {
    return L ** 2;
  }

  console.warn(`Invalid signature`);
}

calculateSurface(2);
calculateSurface(6, 7);
calculateSurface();
calculateSurface(1, 2, 3, 4);

const calculateSquareSurface = (L) => {
  const surface = calculateSurface(L);

  return surface;
};
console.log(calculateSquareSurface(4, 4));

const calculateRectangleSurface = (L, l) => {
  const surface = calculateSurface(L, l);
  return surface;
};
console.log(calculateRectangleSurface(8, 9));
