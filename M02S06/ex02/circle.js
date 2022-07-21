const [_, $, ...parameters] = process.argv;
const radius = parameters[0];

console.log(Math.PI * radius ** 2);
