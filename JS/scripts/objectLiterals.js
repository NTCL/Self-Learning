function f(a, b) {
    return {
        a : a,
        b,
        c: function() {
            return a + b;
        },
        d() {
            return a - b;
        },
        ['e' + a + b] : 10

    }
}

const o = f(1, 2);
console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c()); // 3
console.log(o.d()); // -1
console.log(o.e12); // 10

