function a() {
    return 'a';
}
console.log(a()); // a

const b = () => {
    return 'b';
};
console.log(b()); // b

const c = () => 'c';
console.log(c()); // c

const d = (x) => 'd' + x + 'd';
console.log(d('X')); // dXd

const e = x => 'e' + x + 'e';
console.log(e('X')); // eXe

const f = (x, y) => 'f' + x + 'f' + y;
console.log(f('X', 'Y')); // fXfY