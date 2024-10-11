const f = function(x, y = 20, z = y * 2) {
    console.log(x);
    console.log(y);
    console.log(z);
}

f();
f(1);
f(1, 2);
f(undefined, undefined);

const f2 = function(x = y, y = 20) {
    console.log(x);
    console.log(y);
}

f2();