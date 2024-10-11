let a = new Map();
a.set("a", 1);
a.set(2, "b");
console.log(a.get("a")); // 1
console.log(a.get(2)); // b

let b = {};
let c = {};
a.set(b, 3);
a.set(c, 4);
console.log(a.get(c)); // 4
console.log(a.has(b)); // true
console.log(a.size); // 4
a.delete(b);
console.log(a.has(b)); // false
console.log(a.size); // 3

let d = new Map([
    ["e", 5],
    [6, "f"]
]);

for(let k of d.keys()) {
    console.log(k); // e, 6
}

for(let v of d.values()) {
    console.log(v); // 5, f
}

for(let e of d.entries()) {
    console.log(e); // ['e', 5], [6, 'f']
}

d.forEach(function (v, k, m) {
    console.log(k + ":" + v); // e:5, 6:f
    console.log(d == m); // true, true
});