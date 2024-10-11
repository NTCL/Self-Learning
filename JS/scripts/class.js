class a {
    // SyntaxError: A class may only have one constructor
    /*
    constructor() {
        console.log("a constructor");
    }
    */

    constructor(num) {
        this.num = num;
        console.log("a constructor " + this.num);
    }

    f() {
        console.log("a f");
    }

    static s() {
        console.log("a s");
    }
}

let b = new a(1); // a constructor 1

console.log(typeof a); // function
console.log(typeof b); // object
console.log(b.f === a.prototype.f); // true

b.f(); // a f
a.s(); // a s

// let d = new c(2); // ReferenceError: Cannot access 'c' before initialization

class c extends a {
    /**
     * ReferenceError: Must call super constructor in derived class 
     * before accessing 'this' or
     * returning from drived constructor
     */ 
    constructor(num) {
        super(num);
        console.log("c constructor " + this.num);
    }

    f() {
        console.log("c f");
        super.f();
    }

    static s() {
        console.log("c s");
        super.s();
    }
}

let e = new c(2); // a constructor 2, c constructor 2
e.f(); // c f, a f
c.s(); // c s, a s
