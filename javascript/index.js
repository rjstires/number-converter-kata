//- Courtesy of James Grenning (@jwgrenning) and Jeff Langr (@jlangr)
//- Use this to learn TDD

const toWords = require('./NumberConverter.js');
const number = parseInt(process.argv[2]);
console.log(toWords(number));
