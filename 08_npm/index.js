//const chalk = require("chalk")

//console.log(chalk.blue("Welcome to nodejs series"));


//console.log(chalk.blue.underline("Welcome to nodejs series"));
//console.log(chalk.blue.underline.inverse("Welcome to nodejs series"));



//console.log(chalk.green.underline.inverse("successfully completed"));
//console.log(chalk.red.underline.inverse("oops your are fail in exam!!"));
//console.log(chalk.yellow.underline.inverse("warning sign"));


const chalk = require("chalk")

const validator = require("validator");
const result = validator.isEmail("vaishnavi@gmail.com");
console.log(result);
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));