// nextTick and microtask callbacks are executed in between the execution of check callbacks
// check callbacks added in/after check phase will be executed in the next loop

const fs = require('node:fs');
const net = require('net');
const {loop} = require('./loop');

loop(10);

let client = net.createConnection({'port': 3000});
client.on('close', () => {
    console.log('close 1');
    setImmediate(() => console.log('check in close 1'));
});
client.destroy();

setImmediate(() => console.log('check 1'));
setImmediate(() => {
    console.log('check 2');
    setImmediate(() => console.log('check in check 2'));
    Promise.resolve().then(() => console.log('microtask in check 2'));
    process.nextTick(() => console.log('nextTick in check 2'));
});
setImmediate(() => console.log('check 3'));

fs.readFile(__filename, () => {
    console.log('pending 1');
    setImmediate(() => console.log('check in pending 1'));
    
});

setTimeout(() => {
    console.log('timer 1');
    setImmediate(() => console.log('check in timer 1'));
}, 0);
let start = Date.now();
while(Date.now() - start < 100) {}