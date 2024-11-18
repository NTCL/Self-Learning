let a = {
    b : 1,
    c : 2,
    d : 3
};

let {b, c : ca, d : da = 4, e = 5} = a;
console.log(b);
// console.log(c); // ReferenceError: c is not defined
console.log(ca);
// console.log(d); // ReferenceError: d is not defined
console.log(da);
console.log(e);
({b, e} = {b: 6, e: 7});
console.log(b);
console.log(e);