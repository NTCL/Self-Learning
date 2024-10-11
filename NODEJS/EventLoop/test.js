const {loop} = require('./loop');

loop(2);

const fs = require("node:fs");

const net = require('net');

let client = net.createConnection({'port': 2000});
client.on('close', () => console.log('close 1'));
client.destroy();

client = net.createConnection({'port': 2000});
client.on('close', () => console.log('close 2'));
client.destroy();

let server = net.createServer();
server.on('close', () => console.log('server 1 close'));
server.close();

server = net.createServer();
server.on('close', () => console.log('server 2 close'));
server.close();

