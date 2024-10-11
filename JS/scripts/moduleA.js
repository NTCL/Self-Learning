console.log('BEFORE IMPORT moduleB');
import {a, b, c as ca, default as ea, f, g} from './moduleB.js';
import z from './moduleC.js';

// b = 4; // TypeError: Assignment to constant variable
console.log(a); // 1
console.log(b); // 2
// console.log(c); // ReferenceError: c is not defined
console.log(ca); // {d: 3}
ca.d = 4;
console.log(ca); // {d: 4}
console.log(ea); // 4
f('Hello World'); // f Hello Word
let ga = new g(); // g constructor
ga.h(); // g h
console.log(z); // 10