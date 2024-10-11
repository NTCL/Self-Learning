// nextTick and microtask callbacks are executed in between the execution of close callbacks
// close callbacks added in/after close phase will be executed in the same loop
// last in first out

const fs = require('node:fs');
const net = require('net');
const {loop} = require('./loop');

loop(10);

let client = net.createConnection({'port': 3000});
client.on('close', () => console.log('close 1'));
client.destroy();

client = net.createConnection({'port': 3000});
client.on('close', () => {
    console.log('close 2');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in close 2'));
    client.destroy();
    Promise.resolve().then(() => console.log('microtask in close 2'));
    process.nextTick(() => console.log('nextTick in close 2'));
});
client.destroy();

client = net.createConnection({'port': 3000});
client.on('close', () => console.log('close 3'));
client.destroy();

setImmediate(() => {
    console.log('check 1');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in check 1'));
    client.destroy();
});

fs.readFile(__filename, () => {
    console.log('pending 1');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in pending 1'));
    client.destroy();
});


setTimeout(() => {
    console.log('timer 1');
    client = net.createConnection({'port': 3000});
    client.on('close', () => console.log('close in timer 1'));
    client.destroy();
}, 0);
let start = Date.now();
while(Date.now() - start < 100) {}