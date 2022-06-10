function calculateRectangleArea(L, l) {
  return L * l;
}
console.warn(
  `Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.`,
);
let squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(
  'Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.',
);
let anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3`,
);
console.log(calculateRectangleArea(4, 3));

console.warn(`Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
`);

const rectangleArea01 = calculateRectangleArea(5, 3);
const rectangleArea02 = calculateRectangleArea(3, 2);
const totalSurfaceArea = rectangleArea01 + rectangleArea02;

console.log(totalSurfaceArea);

console.warn(
  'Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9',
);
console.log(calculateRectangleArea(12, 9));

console.warn(
  `Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.`,
);
const rectangle01 = calculateRectangleArea(15, 31);
const rectangle02 = calculateRectangleArea(8, 9);
const rectangle03 = calculateRectangleArea(10, 5);

const totalSurface = rectangle01 + rectangle02 + rectangle03;
console.log(totalSurface);
