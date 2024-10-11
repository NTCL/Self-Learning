const {add: add1, subtract: subtract1} = require('./Export1');
console.log('Export 1');
console.log(add1(2, 3));
console.log(subtract1(2, 3));

const {add: add2, subtract: subtract2} = require('./Export2');
console.log('Export 2');
console.log(add2(2, 3));
console.log(subtract2(2, 3));

const {add: add3, subtract: subtract3} = require('./Export3');
console.log('Export 3');
console.log(add3(2, 3));
console.log(subtract3(2, 3));

const obj = require('./Export4');
console.log('Export 4');
console.log(obj);
// console.log(add6(2, 3));
// console.log(subtract6(2, 3));