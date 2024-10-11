// nextTick and microtask callbacks are executed in between the execution of timer callbacks
// timer callbacks added in/after timer phase in the current loop will be executed in the next loop

const fs = require('node:fs');
const net = require('net');
const {loop} = require('./loop');

loop(10);

let start;

let client = net.createConnection({'port': 3000});
client.on('close', () => {
    console.log('close 1');
    setTimeout(() => console.log('timer in close 1'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
});
client.destroy();

setImmediate(() => {
    console.log('check 1');
    setTimeout(() => console.log('timer in check 1'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
});

fs.readFile(__filename, () => {
    console.log('pending 1');
    setTimeout(() => console.log('timer in pending 1'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
});

setTimeout(() => console.log('timer 1'), 0);
setTimeout(() => {
    console.log('timer 2');
    setTimeout(() => console.log('timer in timer 2'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in timer 2'));
    process.nextTick(() => console.log('nextTick in timer 2'));
}, 0);
setTimeout(() => console.log('timer 3'), 0);
start = Date.now();
while(Date.now() - start < 100) {}
