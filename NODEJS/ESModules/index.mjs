import {default as math, name} from "./DefaultExport.mjs";
const {add: add1, subtract: subtract1} = math;
console.log(add1(2,3));
console.log(subtract1(2,3));
console.log(name);

import {add as add2, subtract as subtract2} from "./NamedExport.mjs";
console.log(add2(2,3));
console.log(subtract2(2,3));