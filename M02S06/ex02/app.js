// sintactic sugar
const [a, b, ...parameters] = process.argv;

const width = parameters[0];
const height = parameters[1];
// const [width, height] = parameters
console.log(width * height);
