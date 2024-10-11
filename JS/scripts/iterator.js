/**
 * Iterable {
 *  [Symbol.iterator]() : Iterator
 * }
 * 
 * Iterator {
 *  next() : IteratorReuslt
 * }
 * 
 * IteratorReuslt {
 *  value : any
 *  done : boolean
 * }
 */

let iterable = [1, 2, 3];

function createIterator(array) {
    let count = 0;
    return {
        next: function() {
            return count < array.length ?
                {
                    value : array[count++], 
                    done : false
                } :
                {
                    value : undefined,
                    done: true
                };
        }
    }
}

let iterator = createIterator(iterable);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let o = {
    a : 1,
    b : 2
};

/*
for(let v of o) { // TypeError: o is not iterable
    console.log(v);
}
*/

o[Symbol.iterator] = function() {
    let properties = Object.keys(o);
    let count = 0;
    let done = false;

    return {
        next : () => {
            if(count >= properties.length) {
                done = true;
            }
            return {
                done,
                value : this[properties[count++]]
            };
        }
    }
}

for(let v of o) {
    console.log(v);
}