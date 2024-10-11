function * f() {
    console.log("f 1");
    yield 1;
    console.log("f 2");
    return 2;
    console.log("f 3");
    yield 3;
    console.log("f 4");
}

let a = f();
console.log(a.next()); // f 1, {value : 1, done : false}
console.log(a.next()); // f 2, {value : 2, done : false}
console.log(a.next()); // {value : undefined, done : true}
console.log(a.next()); // {value : undefined, done : true}

let o = {
    a : 1,
    b : 2
};

o[Symbol.iterator] = function * () {
    let properties = Object.keys(o);
    for(let p of properties) {
        yield this[p];
    }
}

for(let v of o) {
    console.log(v); // 1, 2
}
