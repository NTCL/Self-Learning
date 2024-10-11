let a = new Set();
a.add(1);
a.add(1); // ignore duplicate value

console.log(a.size); // 1

let b = {};
let c = {};

a.add(b);
a.add(c);
console.log(a.size); // 3
console.log(a.has(b)); // true
b.ba = 1;
console.log(a.has(b)); // true
console.log(a.has({})); // false
a.delete({});
console.log(a.size); // 3
a.delete(1);
console.log(a.size) // 2

let d = new Set().add(1).add(2);
console.log(d.size); // 2

let e = new Set([1, 2, 3, 4, 4, 3]);
console.log(e.size); // 4

for(let k of e.keys()) {
    console.log(k); // 1, 2, 3, 4
}

for(let v of e.values()) {
    console.log(v); // 1, 2, 3, 4
}

for(let en of e.entries()) {
    console.log(en); // [1, 1], [2, 2], [3, 3], [4, 4]
}

e.forEach(function (v, k, s) {
    console.log(k + ":" + v); // 1:1, 2:2, 3:3, 4:4
    console.log(e == s); // true, true, true, true
});