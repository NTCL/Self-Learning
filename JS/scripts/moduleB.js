export let a = 1;

let b = 2;
let c = {
    d : 3
};

export {b, c}

let e = 4;

export default e;

export function f(x) {
    console.log('f ' + x);
}

export class g {
    constructor() {
        console.log('g constructor');
    }
    h() {
        console.log('g h');
    }
}

console.log('moduleB END');