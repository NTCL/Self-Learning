function f() {
    var a = 1;
    console.log(a); // 1
}
f();
// console.log(a); // ReferenceError: a is not defined

{
    var b = 1;
}
console.log(b); // 1

var c = 1;
var c = 2;
var c;
console.log(c); // 2

d = 1;
console.log(d); // 1
var d;

var e = 1;
(function() {
    var e = 2;
    console.log(e); // 2
})();

console.log(e); // 1