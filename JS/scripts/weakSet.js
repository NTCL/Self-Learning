let a = new WeakSet();
// a.add(1); // TypeError: Invalid value used in weak set
let b = {};
a.add(b);
b = null;
/**
 * no entry in weakset 'a' after garbage collection 
 * as there is no reference to object 'b'
 */
console.log(a);
