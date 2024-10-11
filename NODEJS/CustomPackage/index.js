const {lowerCase} = require("lower-case");
const {upperCase} = require("upper-case");

function greet(name) {
    console.log(`${lowerCase("Hello")} ${upperCase(name)}!`);
}

greet('Leon');

module.exports = greet;