const toWords = require('./NumberConverter.js');
const number = parseInt(process.argv[2]);
console.log(toWords(number));
