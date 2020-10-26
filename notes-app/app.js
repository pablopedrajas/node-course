const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');


console.log(chalk.blue.bgRed.bold('shit'));
console.log(validator.isURL('www.plaktonsandals.com'));