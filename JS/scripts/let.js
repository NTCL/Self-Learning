function f() {
    let a = 1;
    console.log(a); // 1
}
f();
// console.log(a); // ReferenceError: a is not defined

{
    let b = 1;
}
// console.log(b); // ReferenceError: b is not defined

let c = 1;
// let c = 2; // SyntaxError: Identifier 'c' has already been declared

// d = 1;
let d;