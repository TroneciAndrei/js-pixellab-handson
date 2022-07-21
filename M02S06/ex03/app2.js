const fs = require('fs');

const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(`${data} this is our node script!`);
