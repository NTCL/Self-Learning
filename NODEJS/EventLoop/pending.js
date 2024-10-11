const fs = require('node:fs');
const net = require('net');
const {loop} = require('./loop');

loop(10);
let client = net.createConnection({'port': 3000});
client.on('close', () => console.log('close 1'));
client.destroy();

setImmediate(() => console.log('check 1'));

fs.readFile(__filename, () => {
    console.log('pending 1');
    fs.readFile(__filename, () => {
        console.log('pending in pending 1');
    });
});

setTimeout(() => console.log('timer 1'), 0);
let start = Date.now();
while(Date.now() - start < 100) {}
