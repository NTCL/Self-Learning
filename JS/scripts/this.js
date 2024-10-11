const o = {
    f : function() {
        console.log(this);

        setTimeout(function() {
            console.log(this);
        }, 1000);

        var self = this;
        setTimeout(function() {
            console.log(self);
        }, 1000);

        setTimeout(() => console.log(this), 1000);
    },
    f2 : function() {
        f();
    },
    f3 : function(cb) {
        cb();
    }
}

// o.f(); // o, window, o, o

// o.f2();

// o.f3(o.f);

const ff = o.f;

// ff(); // window, window, window, window

// ff.call(o); // o, window, o, o