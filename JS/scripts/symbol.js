let a = Symbol(1);
console.log(typeof a); // symbol
console.log(a); // Symbol(1)

let b = Symbol('b');
let c = Symbol('b');
console.log(b === c); // false
console.log(b); // Symbol(b)

let d = Symbol.for('c');
let e = Symbol.for('c')
console.log(d === e); // true
console.log(Symbol.keyFor(d)); // c

let o = {
    [b] : 1,
    [c] : 2
};

console.log(Object.getOwnPropertyNames(o)); // []
console.log(Object.getOwnPropertySymbols(o)); // [Symbol(b), Symbol(b)]

o[b] = 10;
o[c] = 20;
console.log(o); // {Symbol(b) : 10, Symbol(b) : 20}