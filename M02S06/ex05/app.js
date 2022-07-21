const fs = require('fs');

const message = 'Invat node.js';
fs.writeFileSync('./myFile.txt', message, 'utf-8');

const data = fs.readFileSync('./myFile.txt', 'utf-8');
const newMessage = `${data}, azi, ${new Date().getDate()}!`;
fs.writeFileSync('./myFile2.txt', newMessage, 'utf-8');
