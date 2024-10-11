let a = [1, 2, 3];
let [b, c, d] = a;
console.log(b);
console.log(c);
console.log(d);

let [e, f, g, h] = a;
console.log(e);
console.log(f);
console.log(g);
console.log(h);

let [i, , j] = a;
console.log(i);
console.log(j);

let [k ,l = 4, m, n = 5] = a;
console.log(k);
console.log(l);
console.log(m);
console.log(n);

let [o, ...p] = a;
console.log(o);
console.log(p);