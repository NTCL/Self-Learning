let a = new WeakMap();
a.set('a', 1); // TypeError: Invalid value used as weak map key
let b = {};
a.set(b, 1);
b = null;
/**
 * no entry in weakmap 'a' after garbage collection 
 * as there is no reference to object 'b'
 */
console.log(a);