const fs = require('node:fs');
const net = require('net');
const {loop} = require('./loop');

loop(10);

let start, client;

console.log('sync 1');

client = net.createConnection({'port': 3000});
client.on('close', () => console.log('close 1'));
client.destroy();

client = net.createConnection({'port': 3000});
client.on('close', () => {
    console.log('close 2');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in close 2'));
    client.destroy();
    setImmediate(() => console.log('check in close 2'));
    setTimeout(() => console.log('timer in close 2'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in close 2'));
    process.nextTick(() => console.log('nextTick in close 2'));
});
client.destroy();

client = net.createConnection({'port': 3000});
client.on('close', () => console.log('close 3'));
client.destroy();

setImmediate(() => console.log('check 1'));
setImmediate(() => {
    console.log('check 2');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in check 2'));
    client.destroy();
    setImmediate(() => console.log('check in check 2'));
    setTimeout(() => console.log('timer in check 2'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in check 2'));
    process.nextTick(() => console.log('nextTick in check 2'));
});
setImmediate(() => console.log('check 3'));

fs.readFile(__filename, () => {
    console.log('pending 1');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in pending 1'));
    client.destroy();
    setImmediate(() => console.log('check in pending 1'));
    setTimeout(() => console.log('timers in pending 1'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in pending 1'));
    process.nextTick(() => console.log('nextTick in pending 1'));
});

setTimeout(() => console.log('timer 1'), 0);
setTimeout(() => {
    console.log('timer 2');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in timer 2'));
    client.destroy();
    setImmediate(() => console.log('check in timer 2'));
    setTimeout(() => console.log('timer in timer 2'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in timer 2'));
    process.nextTick(() => console.log('nextTick in timer 2'));
}, 0);
setTimeout(() => console.log('timer 3'), 0);

start = Date.now();
while(Date.now() - start < 100) {}

Promise.resolve().then(() => console.log('microtask 1'));
Promise.resolve().then(() => {
    console.log('microtask 2');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in microtask 2'));
    client.destroy();
    setImmediate(() => console.log('check in microtask 2'));
    setTimeout(() => console.log('timer in microtask 2'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in microtask 2'));
    process.nextTick(() => console.log('nextTick in microtask 2'));
});
Promise.resolve().then(() => console.log('microtask 3'));

process.nextTick(() => console.log('nextTick 1'));
process.nextTick(() => {
    console.log('nextTick 2');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in nextTick 2'));
    client.destroy();
    setImmediate(() => console.log('check in nextTick 2'));
    setTimeout(() => console.log('timer in nextTick 2'), 0);
    start = Date.now();
    while(Date.now() - start < 100) {}
    Promise.resolve().then(() => console.log('microtask in nextTick 2'));
    process.nextTick(() => console.log('nextTick in nextTick 2'));
});
process.nextTick(() => console.log('nextTick 3'));

console.log('sync 2');
