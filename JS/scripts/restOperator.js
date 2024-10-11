const f = function(a, ...others) {
    console.log(a);
    console.log(others);
}

f();
f(1);
f(1, 2);
f(1, 2, 3);